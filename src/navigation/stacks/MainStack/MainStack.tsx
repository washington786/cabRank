import { createStackNavigator } from "@react-navigation/stack";
import SliderScreen from "../../../screens/auth/SliderPage/SliderScreen";
import BottomTabNavigation from "../../bottomNavigation/BottomTabNavigation";
// initialRouteName='app'
const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      
      <Stack.Screen name="auth" component={SliderScreen} />
      <Stack.Screen name="app" component={BottomTabNavigation} />
      
    </Stack.Navigator>
  );
};

export default MainStack;
