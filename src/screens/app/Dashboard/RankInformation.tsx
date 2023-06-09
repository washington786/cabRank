import { Image, StyleSheet, View } from "react-native";
import React from "react";
import MainView from "../../../globals/MainView";
import HeaderBack from "../../../components/app/HeaderBack";
import { useRoute } from "@react-navigation/native";
import Swiper from "react-native-swiper";
import { Caption, Text } from "react-native-paper";

import Icons from "react-native-vector-icons/Feather";
import { rgba } from "../../../globals/Colors";
import { roboto } from "../../../globals/Fonts";
import MapDirections from "../../../components/app/MapDirections";
import Scroller from "../../../globals/Scroller";
import MapViewDirections from 'react-native-maps-directions';
const RankInformation = () => {
  const route = useRoute();
  const { place,lat,long } = route.params;
  const { rankName, city, province, description, images, operations,coords } = place;
  const {latitude,longitude} = coords;
  const origin = {latitude: -23.9045, longitude: 29.4689};
  
  return (
    <MainView>
      <HeaderBack title="Rank Information" />
      <Top images={images} />
      <Scroller>
        <Middle
          city={city}
          description={description}
          operation={operations}
          place={rankName}
          province={province}
        />

        <MapDirections lat={lat} long={long} d_lat={latitude} d_long={longitude}/>
     
      </Scroller>
    </MainView>
  );
};

type t = {
  images: [];
};
const Top = (props: t) => {
  return (
    <View style={{ minHeight: 300, maxHeight: 300 }}>
      <Swiper
        showsButtons={true}
        height={300}
        containerStyle={{
          height: 300,
          maxHeight: 300,
          minHeight: 300,
          zIndex: 100,
        }}
        contentContainerStyle={{
          height: 300,
          maxHeight: 300,
          minHeight: 300,
          zIndex: 100,
        }}
        activeDotColor={"#fff"}
      >
        {props.images.map((url, index) => (
          <View style={{ height: 300, backgroundColor: "red" }} key={index}>
            <Image
              style={{
                resizeMode: "cover",
                height: 300,
                width: "100%",
                zIndex: 100,
              }}
              source={{ uri: url }}
              resizeMode="cover"
            />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

type m = {
  city: string;
  province: string;
  place: string;
  operation: object;
  description: string;
};
const Middle = (props: m) => {
  const { open, closes } = props.operation;
  return (
    <View style={styles.con}>
      <Text>
        {`${props.province}`}, {`${props.city}`}
      </Text>
      <InfoWrapper caption={`${props.place}`} color="red" icon="map-pin" />
      <ViewWrap>
        <ViewWrap>
          <InfoWrapper caption="Opens" color={"green"} icon="clock" />
          <Text variant="labelSmall" style={styles.op}>
            {`${open}`} am
          </Text>
        </ViewWrap>
        <Text>|</Text>
        <ViewWrap>
          <InfoWrapper caption="Closes" color={"red"} icon="clock" />
          <Text variant="labelSmall" style={styles.op}>
            {`${closes}`} pm
          </Text>
        </ViewWrap>
      </ViewWrap>
      <View>
        <Text
          variant="labelSmall"
          style={styles.desc}
          numberOfLines={2}
          ellipsizeMode="tail"
        >{`${props.description}`}</Text>
      </View>
    </View>
  );
};

type icoInfo = {
  icon: string;
  caption: string;
  color: string;
};

type viw = {
  children: any;
};
const ViewWrap = (props: viw) => {
  return <View style={styles.viw}>{props.children}</View>;
};

const InfoWrapper = (props: icoInfo) => {
  return (
    <View style={styles.wrap}>
      <Icons
        name={`${props.icon}`}
        size={20}
        color={`${props.color}`}
        style={styles.icon}
      />
      <Caption>{`${props.caption}`}</Caption>
    </View>
  );
};

export default React.memo(RankInformation);

const styles = StyleSheet.create({
  swiper: {
    flexGrow: 1,
    maxHeight: 200,
    minHeight: 200,
  },
  con: {
    marginHorizontal: 8,
    paddingHorizontal: 5,
    paddingVertical: 8,
  },
  wrap: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  icon: {
    paddingHorizontal: 8,
  },
  viw: {
    flexDirection: "row",
    alignItems: "center",
  },
  op: {
    paddingHorizontal: 8,
  },
  desc: {
    color: rgba.grey_4,
    paddingHorizontal: 5,
    paddingVertical: 6,
    textAlign: "justify",
    fontFamily: roboto.thin,
  },
});
