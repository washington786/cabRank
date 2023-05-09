import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../globals/Colors";

const height = Dimensions.get("screen").height;

type slider = {
  customHeight: number;
  children: any;
};

const SliderCurve = (props: slider) => {
  return (
    <View style={[styles.con, { height: height * props.customHeight }]}>
      {props.children}
    </View>
  );
};

export default SliderCurve;

const styles = StyleSheet.create({
  con: {
    height: height * 0.35,
    backgroundColor: colors.primary_8,
    borderBottomEndRadius: 120,
  },
});
