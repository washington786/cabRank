import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Title } from "react-native-paper";
import { roboto } from "../../globals/Fonts";
import { Tab } from "react-native-elements";
import Logo from "../logo/Logo";

type In = {
  children: any;
};

const SliderContent = (props: In) => {
  return (
    <>
      <View style={styles.con}>
        <Logo />
      </View>
      <View>{props.children}</View>
    </>
  );
};

export default SliderContent;

const styles = StyleSheet.create({
  con: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    alignSelf: "center",
    height: "100%",
    justifyContent: "center",
  },
  tabs: {
    width: "100%",
  },
});
