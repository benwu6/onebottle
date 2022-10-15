import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import HistoryScreen from "./src/screens/HistoryScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    History: HistoryScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Home",
      headerShown: false,
    },
  }
);

export default createAppContainer(navigator);
