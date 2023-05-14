import { StyleSheet } from "react-native";
import React from "react";
import Scroller from "../../../globals/Scroller";
import MainWrapperView from "../../../components/app/MainWrapperView";
import HeaderBack from "../../../components/app/HeaderBack";
import MarshalCard from "../../../components/app/MarshalCard";
import { useNavigation } from "@react-navigation/native";
import { DUMMY_DATA } from "../../../utils/Data";

const Marshal = () => {
  return (
    <Scroller>
      <MainWrapperView>
        <HeaderBack title="Cab Marshals" />
        <MarshalWrapper/>
      </MainWrapperView>
    </Scroller>
  );
};

const MarshalWrapper = () => {
  const navigation = useNavigation();

  const onPress = (): void => {
    navigation.navigate("chat");
  };
  return (
    <>
      {DUMMY_DATA.map((item, index) => {
        return (
          <MarshalCard
            icon="user"
            subtitle={item.rankName}
            title={`${item.province}, ${item.city}`}
            onPress={onPress}
            key={index}
            index={index}
          />
        );
      })}
    </>
  );
};

export default React.memo(Marshal);

const styles = StyleSheet.create({});
