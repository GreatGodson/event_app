import React, { useState } from "react";
import { Modal, Text, View, Button, ActivityIndicator } from "react-native";
import AppTheme from "../../../../core/utils/theme/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import SizedBox from "../../../../core/shared/presentation/components/sizedbox";

// onRequestClose={onClose}
const ErrorDialog = ({ visible, title, content, onOkPress }) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      backgroundColor={AppTheme.whiteColor}
      onRequestClose={onOkPress}
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
          <Text
            style={{ fontSize: 22, fontWeight: "500", alignSelf: "center" }}
          >
            {title}
          </Text>
          <SizedBox height={18} />

          <Text style={{ fontSize: 16, fontWeight: "400" }}>{content}</Text>
          <SizedBox height={26} />
          <TouchableOpacity onPress={onOkPress}>
            <Text style={{ alignSelf: "center", color: "blue" }}> OK</Text>
          </TouchableOpacity>
        </View>

        {/* <Button title="Close" onPress={onClose} /> */}
      </View>
    </Modal>
  );
};

export default ErrorDialog;
// Example usage
