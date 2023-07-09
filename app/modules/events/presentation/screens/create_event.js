import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, SafeAreaView, Alert } from "react-native";
import AppTheme from "../../../../core/utils/theme/colors";
import CustomTextInput from "../../../../core/shared/presentation/components/custom_border_textinput.js";
import CustomButton from "../../../../core/shared/presentation/components/custom_button";
import { MaterialIcons } from "@expo/vector-icons";
import DateTimePicker, {DateTimePickerAndroid} from "@react-native-community/datetimepicker";
import React, { useState, useContext, useEffect } from "react";
import SizedBox from "../../../../core/shared/presentation/components/sizedbox";
import { collection, addDoc, getFirestore, doc, setDoc, onSnapshot, updateDoc, arrayUnion} from "firebase/firestore";
import firebase from 'firebase/app';
import { UserContext } from "../../../../core/context";
import { getAuth } from 'firebase/auth';


// import { collection, doc, addDoc } from 'firebase/firestore';


const CreateEventScreen = () => {
  const { user, setUser } = useContext(UserContext);
  const firestore = getFirestore()
  const router = useRouter();
  const [date, setDate] = useState(new Date(1598051730000));
  const [event, setEvents]= useState([])


  const eventData = {
    first: 'Ada',
    last: 'Lovelace',
    born: 1815,
  };
  const auth = getAuth();
  const currentUser = auth.currentUser;
  const uid = currentUser.uid;

  const db = getFirestore();

  const customDocRef = doc(collection(db, 'users'), uid);
  


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

  
  useEffect(() => {
   
    const unsubscribe = onSnapshot( customDocRef, (doc) => {
      if (doc.exists()) {
        const allData= doc.data();
     setEvents(allData.events);
        console.log(event);
        console.log(`the event is : ${event}`)
        
      } else {
        setEvents(null);
        console.log('does not exist')
        console.log(doc.id)
        console.log(doc)
 
      }
    });

    return () => unsubscribe();
  }, []);
  
  // const { globalUserData, setGlobalUserData } = useContext(GlobalContext);
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
        <CustomButton 
        buttonTitle={"Save"}
         width={"80%"} 
         onPress={ async ()=> {

          try {

            const newEvent ={
              "title": 'title',
              "date": 'event date'
            }

          const updatedEvents = [...event, newEvent];
            // await updateDoc(customDocRef, newEvent);

           
            await updateDoc(customDocRef, { events: updatedEvents});

            // const docRef = await addDoc(collection(firestore, "events"), {
            //   first: "Ada",
            //   last: "Lovelace",
            //   born: 1815
            // });
            console.log("Document written with ID: ", customDocRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
         }}
         />
      </View>
    </SafeAreaView>
  );
};

export default CreateEventScreen;
