

import { StyleSheet } from "react-native";
import AppTheme from "../../../../core/utils/theme/colors";


const homeStyles = StyleSheet.create({
    wrapper: (isOpen) => ({
      backgroundColor: isOpen ?? false ? "grey" : AppTheme.scaffoldColor,
      flex: 1,
    }),
    screenTitle: {
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 16,
    },
    listTileContainer: (isOpen) => ({
      flexDirection: "row",
      paddingHorizontal: 24,
      marginHorizontal: 24,
      marginVertical: 12,
      paddingVertical: 24,
      justifyContent: "space-between",
      backgroundColor: isOpen ?? false ? "#CCCCCC" : AppTheme.whiteColor,
      alignItems: "center",
      borderRadius: 10,
    }),
    updateButton: {
      backgroundColor: "purple",
      borderRadius: 6,
      paddingVertical: 4,
      paddingHorizontal: 8,
    },
  });


  export default homeStyles