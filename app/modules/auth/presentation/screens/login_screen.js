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
import { useRouter } from "expo-router";
import CustomButton from "../../../../core/shared/presentation/components/custom_button";
import AppRoutes from "../../../../core/routes/app_routes";
import useLoginService from "../../domain/service/login_service";
import { useState, useEffect, useContext } from "react";
import LoadingDialog from "../components/loading_dialog";
import ErrorDialog from "../components/error_dialog";
import { authStyles } from "../../../../core/utils/theme/styles/auth_screen_styles";
import { useNavigation } from "expo-router";
import { UserContext } from "../../../../core/context";

const LoginScreen = () => {
  const router = useRouter();
  const { user, setUser } = useContext(UserContext);

  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState();
  const { data, isLoading, error, errorMessage, login } = useLoginService(
    email,
    password
  );

  const [isDialogVisible, setIsDialogVisible] = useState(false);

  const handleLoginAccount = () => {
    login(email, password);
  };
  const handleDismissDialog = () => {
    setIsDialogVisible(false);
  };

  useEffect(() => {
    if (error) {
      setIsDialogVisible(true);
    }
  }, [error]);
  return (
    <SafeAreaView style={authStyles.authScreenWrapper}>
      <Image source={require("../../../../../assets/splashPng.png")} />
      <Text style={authStyles.authScreenTitle}>Log In</Text>
      <CustomTextField
        prefixIcon={AppSvgs.emailSvg}
        placeholder={"Email"}
        onChangeText={(val) => setEmail(val)}
      />
      <CustomTextField
        prefixIcon={AppSvgs.lockSvg}
        placeholder={"Password"}
        onChangeText={(val) => setPassword(val)}
      />
      <View
        style={{ alignSelf: "flex-end", marginRight: 20, marginVertical: 17 }}
      >
        <Text>Forgot Password?</Text>
      </View>
      <CustomButton buttonTitle={"Log In"} onPress={handleLoginAccount} />
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
        <TouchableOpacity
          onPress={() => {
            router.replace(AppRoutes.signup);

            console.log(user);
          }}
        >
          <Text> Sign Up</Text>
        </TouchableOpacity>
      </View>

      {isLoading ? (
        <LoadingDialog visible={isLoading} />
      ) : error ? (
        <ErrorDialog
          visible={isDialogVisible}
          title="My Dialog"
          content={errorMessage}
          onOkPress={handleDismissDialog}
        />
      ) : (
        <View />
      )}

      {/* Barrier */}
      {isLoading ? (
        <View style={authStyles.barrier} />
      ) : isDialogVisible ? (
        <View style={authStyles.barrier} />
      ) : (
        <View />
      )}
    </SafeAreaView>
  );
};

export default LoginScreen;
