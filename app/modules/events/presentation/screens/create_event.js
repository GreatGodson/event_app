import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, SafeAreaView, Alert } from "react-native";
import AppTheme from "../../../../core/utils/theme/colors";
import CustomTextInput from "../../../../core/shared/presentation/components/custom_border_textinput.js";
import CustomButton from "../../../../core/shared/presentation/components/custom_button";
import { MaterialIcons } from "@expo/vector-icons";
import DateTimePicker, {DateTimePickerAndroid} from "@react-native-community/datetimepicker";
import React, { useState } from "react";

import SizedBox from "../../../../core/shared/presentation/components/sizedbox";

const CreateEventScreen = () => {
  const router = useRouter();
  const [date, setDate] = useState(new Date(1598051730000));

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

 
  return (
    <SafeAreaView
      style={{
        backgroundColor: AppTheme.scaffoldColor,
        flex: 1,
        paddingHorizontal: 24,

        marginVertical: 15,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 24,
        }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="keyboard-arrow-left" size={36} />
        </TouchableOpacity>

        <Text
          style={{
            textAlign: "center",
            flex: 0.9,
            fontSize: 18,
            fontWeight: "500",
            marginVertical: 10,
          }}
        >
          Create a new event
        </Text>
      </View>

      <View style={{ marginHorizontal: 24 }}>
        <CustomTextInput
          placeholder={"Event Title"}
          onChangeText={(val) => {}}
        />

        <TouchableOpacity onPress={showDatepicker}>
          <CustomTextInput
            placeholder={"Event Title"}
            onChangeText={(val) => {}}
            editable={false}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "flex-end",
          marginVertical: 16,
        }}
      >
        <CustomButton buttonTitle={"Save"} width={"80%"} />
      </View>
    </SafeAreaView>
  );
};

export default CreateEventScreen;
