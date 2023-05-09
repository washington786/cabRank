import { StyleSheet, View } from "react-native";
import React from "react";

import Icons from "react-native-vector-icons/Fontisto";
import { colors } from "../../globals/Colors";

type Lg = {
  style?: object;
  iconColor?: any | string;
};

const Logo = (props: Lg) => {
  return (
    <View style={[styles.con, props.style]}>
      <Icons name="taxi" color={colors.primary_10} size={30} />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  con: {
    backgroundColor: "#fff",
    maxHeight: 80,
    minHeight: 80,
    minWidth: 80,
    maxWidth: 80,
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center',
    borderTopLeftRadius:20,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
  },
});
