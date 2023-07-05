import { Text, View, SafeAreaView, FlatList } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import React, { useRef, useState } from "react";
import CustomButton from "../../../../core/shared/presentation/components/custom_button";
import CustomListTile from "../../../../core/shared/presentation/components/custom_list_tile.js";
import homeStyles from "../styles/home_styles";
import { useRouter } from "expo-router";

const HomeScreen = () => {
  const router = useRouter()
  const sheetRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const data = [
    { title: "Event Title 1", date: "11/03 12:30 pm" },
    { title: "Event Title 2", date: "11/04 2:00 pm" },
    { title: "Event Title 3", date: "11/05 10:00 am" },
  ];

  const renderItem = ({ item }) => (
    <CustomListTile
      title={item.title}
      date={item.date}
      isOpen={isOpen}
      updateOnTap={() => {
        setIsOpen(true);
      }}
    />
  );

  const snapPoints = ["30%"];
  return (
    <SafeAreaView style={homeStyles.wrapper(isOpen)}>
      <View style={homeStyles.screenTitle}>
        <Text style={{ fontSize: 20, fontWeight: "500" }}> My Events</Text>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />

      <View style={{ alignItems: "center" }}>
        <CustomButton buttonTitle={"Add Upcoming Event"} onPress={() => {}} />
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
          <BottomSheetView style = {{ alignItems:'center', flex: 1, justifyContent: 'space-evenly'}}>
            <CustomButton buttonTitle={"Modify Event"} onPress={() => {

              router.push('modules/events/presentation/screens/modify_event')

            }} color={'purple'} />
            <CustomButton buttonTitle={"Delete Event"} onPress={() => {

            }} color={'red'} />
          </BottomSheetView>
        </BottomSheet>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
