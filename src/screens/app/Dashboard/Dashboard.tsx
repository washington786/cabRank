import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import MapView, { Callout, Marker } from "react-native-maps";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";
import { DUMMY_DATA } from '../../../utils/Data';
import { bg, colors } from '../../../globals/Colors';

const Dashboard = () => {
  const navigation = useNavigation();

  const [location, setLocation] = useState({});
  const [error, setError] = useState("");

  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permission to access location was denied");
        return;
      }

      let { coords } = await Location.getCurrentPositionAsync({});
      setLocation(coords);
      var { latitude, longitude } = coords;
      setLatitude(latitude);
      setLongitude(longitude);
    })();
  }, []);

  return (
    <>
      <MapView
        style={styles.map}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.029,
        }}
      >
        {DUMMY_DATA.map((place) => {
          return (
            <View key={place.id}>
              <Marker
                key={place.id}
                title={place.place}
                coordinate={{
                  latitude: place.coords.latitude,
                  longitude: place.coords.longitude,
                }}
              >
                {/* <Callout onPress={onOpenSnack}>
                  <GlobalCaption caption={place.place} />
                </Callout> */}
              </Marker>
            </View>
          );
        })}
      </MapView>
    </>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  con: {
    backgroundColor: '#fff',
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 0,
    margin: 0,
  },
  map: {
    height: "100%",
    width: "100%",
  }
})