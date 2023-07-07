import { useRouter } from "expo-router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import AppRoutes from "../../../../core/routes/app_routes";

const useCreateAccountService = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const router = useRouter();

  const createAccount = async (email, password) => {
    const auth = getAuth();

    try {
      setIsLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
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

  return { data, isLoading, error, errorMessage, createAccount };
};

export default useCreateAccountService;
