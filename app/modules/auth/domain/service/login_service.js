import { useRouter } from "expo-router";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState, useContext } from "react";
import AppRoutes from "../../../../core/routes/app_routes";
import { UserContext } from "../../../../core/context";

const useLoginService = () => {
  const { user, setUser } = useContext(UserContext);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const router = useRouter();

  const login = async (email, password) => {
    const auth = getAuth();

    try {
      setIsLoading(true);

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

    

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

  // console.log(user)

  return { data, isLoading, error, errorMessage, login };
};

export default useLoginService;
