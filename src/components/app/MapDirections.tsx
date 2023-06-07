import { StyleSheet, Text, View } from "react-native";
import React from "react";

import MapView, { Marker, Polyline } from "react-native-maps";
import * as Location from "expo-location";
import { DUMMY_DATA } from "../../utils/Data";
import MapViewDirections from 'react-native-maps-directions';
const destination = {latitude: -23.9004, longitude: 29.4464};
const GOOGLE_MAPS_APIKEY = 'gh';
type map = {
  lat: number;
  long: number;
  d_lat: number;
  d_long: number;
};
const MapDirections = (props: map) => {
  let longitude: number = props.d_long;
  let latitude: number = props.d_lat;

  const coords = [{ latitude, longitude }];

  return (
    <View style={styles.con}>
      <MapView
        style={styles.map}
        region={{
          latitude: props.lat,
          longitude: props.long,
          latitudeDelta: 0.09,
          longitudeDelta: 0.029,
        }}
      >

        <Marker
          coordinate={{
            latitude: props.lat,
            longitude: props.long,
          }}
        />
         <MapViewDirections
                    origin={{latitude: props.lat,
                      longitude: props.long,}}
                    destination={destination}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={4}
                    strokeColor='#000'
                  />
        <Polyline coordinates={coords} strokeColor="#f00" strokeWidth={2} />
      </MapView>
    </View>
  );
};

export default MapDirections;

const styles = StyleSheet.create({
  con: {
    maxHeight: 250,
    minHeight: 250,
    height: "100%",
    backgroundColor: "#eee",
    marginHorizontal: 10,
    marginVertical: 8,
  },
  map: {
    height: "100%",
    width: "100%",
  },
});
