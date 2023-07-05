import LoginScreen from "./modules/auth/presentation/screens/login_screen";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseconfig";
import { getAnalytics } from "firebase/analytics";





export default function Page() {
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
  return (<LoginScreen/>)
}

