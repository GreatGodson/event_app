import { View, Text, TouchableOpacity } from "react-native";
import SizedBox from "./sizedbox";
import homeStyles from "../../../../modules/home/presentation/styles/home_styles";
import AppTheme from "../../../utils/theme/colors";

const CustomListTile = ({ title, date, updateOnTap, isOpen}) => {
  return (
    <View style={homeStyles.listTileContainer(isOpen)}>
      <View>
        <Text style={{ fontSize: 16, fontWeight: "500" }}>
          {title}
        </Text>
        <SizedBox height={6} />
        <Text style={{ fontWeight: "500", color: "grey" }}>{date}</Text>
      </View>
      <TouchableOpacity
        onPress={updateOnTap} 
        style={homeStyles.updateButton}
      >
        <Text style={{ color: AppTheme.whiteColor }}>Update</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomListTile;
