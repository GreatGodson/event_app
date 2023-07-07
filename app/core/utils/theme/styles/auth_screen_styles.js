
import { StyleSheet } from "react-native";
import AppTheme from "../colors";

const authStyles = StyleSheet.create({
    authScreenWrapper: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: AppTheme.scaffoldColor,
      flex: 1,
    },
    authScreenTitle: {
      marginVertical: 20,
      fontSize: 22,
      fontWeight: "500",
    },
    dialogOverlay: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    dialogContainer: {
      backgroundColor: "#fff",
      padding: 20,
      borderRadius: 10,
      elevation: 5,
    },
    dialogTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
    },
    dialogContent: {
      fontSize: 16,
    },
    barrier: {
      ...StyleSheet.absoluteFillObject,
      zIndex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
   
  });
  
  export { authStyles }