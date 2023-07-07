import { useRouter } from "expo-router";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { useState } from "react";
import AppRoutes from "../../../../core/routes/app_routes";

const useLoginService = () => {
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
      setData(userCredential.user);
      router.replace(AppRoutes.home);
    } catch (error) {
      setError(true);
      setErrorMessage(error.message);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, error, errorMessage, login };
};

export default useLoginService;
