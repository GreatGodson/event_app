import { useRouter } from "expo-router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState, useContext } from "react";
import AppRoutes from "../../../../core/routes/app_routes";
import { collection, addDoc, getFirestore, doc, setDoc, onSnapshot} from "firebase/firestore";

import { UserContext } from "../../../../core/context";

const useCreateAccountService = () => {
  const { user, setUser } = useContext(UserContext);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const router = useRouter();



  const createAccount = async (email, password) => {
    const auth = getAuth();
    const userSignupData = {
      email: email,
      name: 'John Doe',
      events: [],
    };

    try {
      setIsLoading(true);

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const currentUser = auth.currentUser;
    const uid = currentUser.uid;
  
    const db = getFirestore();
  
    const customDocRef = doc(collection(db, 'users'), uid);

    await setDoc(customDocRef, userSignupData);

     

      // setUser(userCredential.user.uid);
      setData(userCredential.user.uid);
      router.push(AppRoutes.home);
    } catch (error) {
      setError(true);
      setErrorMessage(error.message);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, error, errorMessage, createAccount };
};

export default useCreateAccountService;
