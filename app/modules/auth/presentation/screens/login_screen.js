import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import AppSvgs from "../../../../core/shared/presentation/components/svgs";
import AppTheme from "../../../../core/utils/theme/colors";
import CustomTextField from "../../../../core/shared/presentation/components/custom_textfield.js";
import { useRouter , useNavigation} from "expo-router";
import CustomButton from "../../../../core/shared/presentation/components/custom_button";




const LoginScreen = () => {
  const router = useRouter();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.authScreenWrapper}>
      <Image source={require("../../../../../assets/splashPng.png")} />
      <Text style={styles.authScreenTitle}>Log In</Text>
      <CustomTextField
        prefixIcon={AppSvgs.emailSvg}
        placeholder={"Email"}
        onChangeText={(val) => console.log(val)}
      />
      <CustomTextField
        prefixIcon={AppSvgs.lockSvg}
        placeholder={"Password"}
        onChangeText={(val) => console.log(val)}
      />
      <View
        style={{ alignSelf: "flex-end", marginRight: 20, marginVertical: 17 }}
      >
        <Text>Forgot Password?</Text>
      </View>
     <CustomButton
     buttonTitle={'Log In'}
     onPress={ ()=>{router.push('modules/home/presentation/screens/home')} }
     
     />
      <View
        style={{
          flexDirection: "row",
          marginVertical: 30,
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: 1,
            backgroundColor: AppTheme.dividerColor,
            width: "20%",
          }}
        />

        <Text style={{ marginHorizontal: 12 }}>Or</Text>
        <View
          style={{
            height: 1,
            backgroundColor: AppTheme.dividerColor,
            width: "20%",
          }}
        />
      </View>

      <View style={{ flexDirection: "row", marginVertical: 20 }}>
        <Image source={require("../../../../../assets/facebook.png")} />
        <Image source={require("../../../../../assets/google.png")} />
      </View>

      <View style={{ flexDirection: "row" }}>
        <Text> Don't have an account? </Text>
        <TouchableOpacity>
          <Text> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
 
});

export default LoginScreen;
