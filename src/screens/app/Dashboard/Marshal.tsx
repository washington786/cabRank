import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Scroller from "../../../globals/Scroller";
import MainWrapperView from "../../../components/app/MainWrapperView";
import HeaderBack from "../../../components/app/HeaderBack";
import MarshalCard from "../../../components/app/MarshalCard";
import { useNavigation } from "@react-navigation/native";

const Marshal = () => {
  const navigation = useNavigation();
  const onPress = (): void => {
    // navigation.navigate("");
    console.log("pressed!");
  };
  return (
    <Scroller>
      <MainWrapperView>
        <HeaderBack title="Cab Marshals" />
        <MarshalCard
          icon="user"
          subtitle="City Center"
          title="Polokwane"
          onPress={onPress}
        />
      </MainWrapperView>
    </Scroller>
  );
};

export default React.memo(Marshal);

const styles = StyleSheet.create({});
