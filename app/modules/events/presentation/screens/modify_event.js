import { useRouter, useRoute } from "expo-router";
import { View, Text, TouchableOpacity, SafeAreaView, Alert } from "react-native";
import AppTheme from "../../../../core/utils/theme/colors";
import CustomTextInput from "../../../../core/shared/presentation/components/custom_border_textinput.js";
import CustomButton from "../../../../core/shared/presentation/components/custom_button";
import { MaterialIcons } from "@expo/vector-icons";
import DateTimePicker, {DateTimePickerAndroid} from "@react-native-community/datetimepicker";
import React, { useState } from "react";

import { collection, addDoc, getFirestore, doc, setDoc, onSnapshot, updateDoc, arrayUnion} from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { getAuth } from 'firebase/auth';
import SizedBox from "../../../../core/shared/presentation/components/sizedbox";

const ModifyEventScreen = () => {
  const router = useRouter();

  const [date, setDate] = useState(new Date(1598051730000));
  const auth = getAuth();
  const currentUser = auth.currentUser;
  const uid = currentUser.uid;
  const db = getFirestore();
  const customDocRef = doc(collection(db, "users"), uid);
  const [isLoading, setLoading] = useState(true);
  




  const updateEvent = async () => {
    const updatedEvent = {
      'title': 'hello world',
      'date': '23rd'
    }
    const eventIndex = event.findIndex(item => item.id === updatedEvent.id);
    const updatedEvents = [...event]; 
    updatedEvents.splice(eventIndex, 1, updatedEvent);
    setEvents(updatedEvents);
  
    try {
      await updateDoc(customDocRef, { events: updatedEvents });
      console.log('Event updated successfully');
    } catch (error) {
      console.log('Error updating event:', error);
      // Handle the error as needed
    }
  };
  
  // const updateEvent = async (updatedEvent, index) => {
  //   const updatedEvents = [...event];
  //   updatedEvents[index] = updatedEvent;
  
  //   setEvents(updatedEvents);
  
  //   try {
  //     await updateDoc(customDocRef, { events: updatedEvents });
  //     console.log('Event updated successfully');
  //   } catch (error) {
  //     console.log('Error updating event:', error);
  //     // Handle the error as needed
  //   }
  // };

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
          Modify Event
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
        <CustomButton 
        onPress={()=> router.back()}    
        buttonTitle={"Save"} width={"80%"}
         />
      </View>
    </SafeAreaView>
  );
};

export default ModifyEventScreen;
