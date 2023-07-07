import React, { useState } from "react";
import { Modal, Text, View, Button, ActivityIndicator } from "react-native";
import AppTheme from "../../../../core/utils/theme/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import SizedBox from "../../../../core/shared/presentation/components/sizedbox";

// onRequestClose={onClose}
const LoadingDialog = ({ visible }) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      backgroundColor={AppTheme.whiteColor}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            backgroundColor: AppTheme.whiteColor,
            paddingVertical: "10%",
            paddingHorizontal: 40,
            borderRadius: 8,
          }}
        >
          <ActivityIndicator
            style={{ paddingVertical: "15%", paddingHorizontal: "15%" }}
            size={"large"}
            color={AppTheme.primaryColor}
          />
        </View>

        {/* <Button title="Close" onPress={onClose} /> */}
      </View>
    </Modal>
  );
};

export default LoadingDialog;
// Example usage
