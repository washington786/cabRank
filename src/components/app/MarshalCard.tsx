import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { colors, rgba } from "../../globals/Colors";

import { Caption, Text } from "react-native-paper";

import Icons from "react-native-vector-icons/Fontisto";
import Icon from "react-native-vector-icons/Feather";

const isIos = Platform.OS === "ios";

type card = {
  title: string;
  subtitle: string;
  icon: string;
  onPress?(): void;
};

const MarshalCard = (props: card) => {
  return (
    <TouchableOpacity style={styles.con} onPress={props.onPress}>
      <View style={styles.icon}>
        <Icon name={props.icon} size={25} color={rgba.grey_3} />
      </View>
      <View style={styles.content}>
        <Text numberOfLines={1}>{props.title}</Text>
        <Caption numberOfLines={1}>{props.subtitle}</Caption>
      </View>
      <View style={styles.icon}>
        <Icon name="chevron-right" size={25} color={rgba.grey_3} />
      </View>
    </TouchableOpacity>
  );
};

export default MarshalCard;

const styles = StyleSheet.create({
  con: {
    backgroundColor: colors.primary_1,
    elevation: 0,
    borderRadius: 5,
    height: isIos ? 80 : 70,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    paddingHorizontal: 10,
    marginVertical: 8,
  },
  content: {
    flex: 1,
    paddingHorizontal: 8,
  },
  icon: {
    paddingHorizontal: 5,
  },
  conWrap: {
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
    width: "100%",
  },
  info: {
    flex: 1,
  },
});
