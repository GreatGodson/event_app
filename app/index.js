import LoginScreen from "./modules/auth/presentation/screens/login_screen";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseconfig";
import { getAnalytics } from "firebase/analytics";
import CreateAccountScreen from "./modules/auth/presentation/screens/create_account_screen";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import React, { useState, createContext, useEffect } from "react";
// import { UserContext } from "./core/context";
import { UserProvider } from "./core/context";
import { NavigationContainer } from "@react-navigation/native";
import { useRouter } from "expo-router";
import AppRoutes from "./core/routes/app_routes";
import * as firebase from "firebase/app";
import "firebase/auth";

export default function Page() {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  return (
    // <UserContext.Provider value={{ newData, setNewData }}>

    <UserProvider>
      <CreateAccountScreen />
    </UserProvider>

    // </UserContext.Provider>
  );
}
