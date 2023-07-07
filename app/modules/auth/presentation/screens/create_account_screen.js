import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import AppSvgs from "../../../../core/shared/presentation/components/svgs";
import AppTheme from "../../../../core/utils/theme/colors";
import CustomTextField from "../../../../core/shared/presentation/components/custom_textfield.js";
import { useRouter, useNavigation } from "expo-router";
import CustomButton from "../../../../core/shared/presentation/components/custom_button";
import AppRoutes from "../../../../core/routes/app_routes";
import { useState, useEffect } from "react";
import useCreateAccountService from "../../domain/service/create_account_service";
import ErrorDialog from "../../presentation/components/error_dialog";
import LoadingDialog from "../../presentation/components/loading_dialog";
import { authStyles } from "../../../../core/utils/theme/styles/auth_screen_styles";


const CreateAccountScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState();
  const { data, isLoading, error, errorMessage, createAccount } =
    useCreateAccountService(email, password);

  const [isDialogVisible, setIsDialogVisible] = useState(false);

  const handleCreateAccount = () => {
    createAccount(email, password);
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
      <Text style={authStyles.authScreenTitle}>Sign Up</Text>
      <CustomTextField
        prefixIcon={AppSvgs.profileSvg}
        placeholder={"Name"}
        onChangeText={(val) => setName(val)}
      />
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
        style={{
          alignSelf: "flex-start",
          marginRight: 20,
          marginVertical: 17,
          marginLeft: 24,
        }}
      >
        <Text>I accept all the Terms & Conditions</Text>
      </View>
      <CustomButton buttonTitle={"Sign Up"} onPress={handleCreateAccount} />
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
        <Text> Already have an account? </Text>
        <TouchableOpacity onPress={() => router.replace(AppRoutes.login)}>
          <Text> Log In</Text>
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



export default CreateAccountScreen;
