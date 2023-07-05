import { View, TextInput } from "react-native";
import hexToRgb from "../../../helpers/hexToRgb";
import AppTheme from "../../../utils/theme/colors";



const CustomTextField = ({placeholder, onChangeText, prefixIcon})=> {
    return  (
        <View
    style={{
      flexDirection: "row",
      alignSelf: "flex-start",
      marginVertical: 8,
      marginHorizontal: 24,
      backgroundColor: AppTheme.whiteColor,
      paddingVertical: 8,
      borderRadius: 10,
    }}
  >
    <View
      style={{
        backgroundColor: `rgba(${hexToRgb(AppTheme.primaryColor)}, 0.1)`,
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginHorizontal: 10,
      }}
    >
      {prefixIcon}
    </View>

    <TextInput
      width="80%"
      placeholder={placeholder}
      onChangeText= {onChangeText}
    />
  </View>
    )
}

export default CustomTextField