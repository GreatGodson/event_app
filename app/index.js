import LoginScreen from "./modules/auth/presentation/screens/login_screen";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseconfig";
import { getAnalytics } from "firebase/analytics";
import CreateAccountScreen from "./modules/auth/presentation/screens/create_account_screen";
import { getAuth } from "firebase/auth";


export default function Page() {

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  return (

 
      <CreateAccountScreen />
 
  );
}
