
import { TouchableOpacity, Text,  StyleSheet } from "react-native"
import AppTheme from "../../../utils/theme/colors"

const CustomButton = ({buttonTitle, onPress, color, width})=> {
    return (
        <TouchableOpacity
        onPress={onPress}
         style={buttonStyle.container(color, width)}>
          <Text
            style={{
              color: AppTheme.whiteColor,
              fontSize: 16,
              fontWeight: "500",
            }}
          >
           {buttonTitle}
          </Text>
        </TouchableOpacity>
    )
}


const buttonStyle = StyleSheet.create({
    container: (color, width)=>({
        backgroundColor: color ?? AppTheme.primaryColor,
        alignItems: "center",
        paddingVertical: 22,
        width: width ?? "45%",
        borderRadius: 133,
      }),
})


export default CustomButton