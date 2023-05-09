import SafeView from "./src/globals/SafeView";
import MainView from "./src/globals/MainView";

import {
  useFonts,
  Roboto_100Thin,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";

import { ActivityIndicator } from "react-native-paper";
import { colors } from "./src/globals/Colors";
import { MainStyle } from "./src/styles/MainStyle";
import MainNavigation from "./src/navigation/MainNavigation";

export default function App() {

  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  if (!fontsLoaded) {
    return (
      <SafeView>
        <MainView>
          <ActivityIndicator size={25}
          color={colors.primary_10}
          style={MainStyle.activity}/>
        </MainView>
      </SafeView>
    );
  }
  return (
    <SafeView>
      <MainView>
        <MainNavigation/>
      </MainView>
    </SafeView>
  );
}
