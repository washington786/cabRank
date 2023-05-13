import { Platform, StyleSheet, View } from "react-native";
import React, { useState } from "react";

import {
  Card,
  List,
  Paragraph,
  Text,
  Divider as Div,
} from "react-native-paper";

import Icons from "react-native-vector-icons/Feather";
import Icon from "react-native-vector-icons/FontAwesome";
import { Divider } from "react-native-elements";
import ScrollWrapper from "../../../globals/ScrollWrapper";
import Scroller from "../../../globals/Scroller";
import HeaderBack from "../../../components/app/HeaderBack";
import MainWrapperView from "../../../components/app/MainWrapperView";
import { roboto } from "../../../globals/Fonts";
import { colors, rgba } from "../../../globals/Colors";

const isIos = Platform.OS === "ios";

const faq_data = [
  {
    title: "Who is covered by Ems?",
    description:
      "Any registered TUT student. The student is covered for the entire academic year including holidays.",
    id: 1,
  },
  {
    title:
      "Can this number be called from any cell phone or any telephone in South Africa?",
    description:
      "Yes, any phone or service provider including Cell C, MTN, 8ta and Vodacom can be used and calls are charged at standard cell phone rates.",
    id: 2,
  },
  {
    title: "When can I call Maponya 911 for assistance?",
    description: "When a student has a medical emergency",
    id: 3,
  },
];
const HelpCenter = () => {
  let title: string = "Help Center";
  let whatsappNo: string = "+2782 969 0666";
  let callNo: string = "+2711 958 9085";
  return (
    <ScrollWrapper>
      <MainWrapperView>
        <HeaderBack title={title} />
        <Scroller>
          <Info />
          <Card mode="contained" style={styles.card}>
            <Text variant="bodyMedium">Help Center Info</Text>
            <Card.Content>
              <CardContent icon="mail" title="taxiassociation@gmail.com" />
              <CardContent icon="phone" title={callNo} />
              <CardContents icon="whatsapp" title={whatsappNo} />
            </Card.Content>
          </Card>
          {/* <Accordion /> */}
        </Scroller>
      </MainWrapperView>
    </ScrollWrapper>
  );
};

interface content {
  title: string;
  icon: string;
}
const CardContent = (props: content) => {
  return (
    <View style={styles.content}>
      <Icons name={props.icon} size={20} color={rgba.grey_4} />
      <Paragraph style={styles.title}>{props.title}</Paragraph>
    </View>
  );
};

const CardContents = (props: content) => {
  return (
    <View style={styles.content}>
      <Icon name={props.icon} size={20} color={rgba.grey_4} />
      <Paragraph style={styles.title}>{props.title}</Paragraph>
    </View>
  );
};

const Info = () => {
  return (
    <Card mode="contained" style={styles.info} contentStyle={styles.content}>
      <Icons name={"info"} size={20} color={rgba.grey_4} />
      <Paragraph style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        for any emergency, contact us using the below details
      </Paragraph>
    </Card>
  );
};

export default HelpCenter;

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 8,
    paddingVertical: 7,
    borderRadius: 0,
    backgroundColor: colors.primary_1,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  title: {
    paddingHorizontal: 8,
    fontFamily: roboto.light,
  },
  info: {
    borderRadius: 50,
    backgroundColor: "#fbfefb",
    marginVertical: 5,
  },
  listTxt: {
    textAlign: "justify",
    paddingHorizontal: 15,
  },
  accTitle: {
    fontFamily: roboto.medium,
    fontSize: 16,
  },
});
