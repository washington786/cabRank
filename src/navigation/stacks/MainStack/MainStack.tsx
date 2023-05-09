import { createStackNavigator } from "@react-navigation/stack";
import SliderScreen from "../../../screens/auth/SliderPage/SliderScreen";
import BottomTabNavigation from "../../bottomNavigation/BottomTabNavigation";

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="app" component={BottomTabNavigation} />
      <Stack.Screen name="auth" component={SliderScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
