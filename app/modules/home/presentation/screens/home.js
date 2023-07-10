import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  Alert,
  ActivityIndicator,
} from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import React, { useRef, useState, useEffect } from "react";
import CustomButton from "../../../../core/shared/presentation/components/custom_button";
import CustomListTile from "../../../../core/shared/presentation/components/custom_list_tile.js";
import homeStyles from "../styles/home_styles";
import { useNavigation, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import {
  collection,
  addDoc,
  getFirestore,
  doc,
  setDoc,
  onSnapshot,
  updateDoc
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import AppTheme from "../../../../core/utils/theme/colors";
import ModifyEventScreen from "../../../events/presentation/screens/modify_event";

const HomeScreen = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const sheetRef = useRef();  
  const [isOpen, setIsOpen] = useState(false);
  const [event, setEvents] = useState([]);
  const auth = getAuth();
  const currentUser = auth.currentUser;
  const uid = currentUser.uid;
  const db = getFirestore();
  const customDocRef = doc(collection(db, "users"), uid);
  const [isLoading, setLoading] = useState(true);
  const [eventIndex, setEventIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = onSnapshot(customDocRef, (doc) => {
      if (doc.exists()) {
        const allData = doc.data();
        setEvents(allData.events);
        console.log(event);
        console.log(`the event is : ${event}`);
        setLoading(false);
      } else {
        setEvents(null);
        console.log("does not exist");
        console.log(doc.id);
        console.log(doc);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const deleteEvent = async (event) => {
    const eventIndex = event.findIndex((item) => item.id === event.id);
    const updatedEvents = [...event];
    updatedEvents.splice(eventIndex, 1);
    setEvents(updatedEvents);

    try {
      await updateDoc(customDocRef, { events: updatedEvents });
      console.log("Event deleted successfully");
    } catch (error) {
      console.log("Error deleting event:", error);
      // Handle the error as needed
    }
  };

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setEventIndex(index)  
          setIsOpen(true);
        }}
      >
        <CustomListTile
          title={item.title}
          date={item.data}
          isOpen={isOpen}
          updateOnTap={() => {
            setIsOpen(true);
          }}
        />
      </TouchableOpacity>
    );
  };

  const snapPoints = ["30%"];

  const showAlert = () => {
    Alert.alert(
      "",
      "Are you sure you want to delete this event?",
      [
        { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
        {
          text: "OK",
          onPress: () => {
            deleteEvent(event);
            setIsOpen(false);
          },
        },
      ],
      { cancelable: false }
    );
  };
  return (
    <SafeAreaView style={homeStyles.wrapper(isOpen)}>
      <View style={homeStyles.screenTitle}>
        <Text style={{ fontSize: 20, fontWeight: "500" }}> My Events</Text>
      </View>

      {isLoading ? (
        <ActivityIndicator
          style={{ marginTop: 20, flex: 1 }}
          size={"large"}
          color={AppTheme.primaryColor}
        />
      ) : event.length === 0 ? (
        <Text
          style={{
            alignSelf: "center",
            marginTop: 20,
            flex: 1,
            fontSize: 22,
          }}
        >
          Events is empty
        </Text>
      ) : (
        <FlatList
          data={event}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      )}

      <View style={{ alignItems: "center" }}>
        <CustomButton
          buttonTitle={"Add Upcoming Event"}
          onPress={() => {
            router.push("modules/events/presentation/screens/create_event");
          }}
        />
      </View>

      {isOpen && (
        <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          onClose={() => {
            setIsOpen(false);
          }}
        >
          <BottomSheetView
            style={{
              alignItems: "center",
              flex: 1,
              justifyContent: "space-evenly",
            }}
          >
            <CustomButton
              buttonTitle={"Modify Event"}
              onPress={() => {
                router.push("modules/events/presentation/screens/modify_event");
                
                // router.push("modules/events/presentation/screens/modify_event", { event, eventIndex });
              }}
              color={"purple"}
            />
            <CustomButton
              buttonTitle={"Delete Event"}
              onPress={showAlert}
              color={"red"}
            />
          </BottomSheetView>
        </BottomSheet>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
