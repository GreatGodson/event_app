import { View, Text, SafeAreaView, Image, TextInput } from "react-native";

const LoginScreen = () => {
  return <SafeAreaView style = {{alignItems: 'center'}}>

      <Image
      source = {require('../../../../../assets/splashPng.png')}
     />
          <Text style = {{marginVertical: 20, fontSize:22, fontWeight: '500'}}>
              Log In
          </Text>

      <TextInput
      placeholder = 'Email'
      onChangeText = {(val)=>{
          console.log(val)
      }}
      
      />
  </SafeAreaView>;
};
 

export default LoginScreen