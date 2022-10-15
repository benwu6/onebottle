import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import PlasticHistoryScreen from "./src/screens/PlasticHistoryScreen";
import NewItem from "./src/screens/NewItem";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    NewItem: NewItem,
    PlasticHistory: PlasticHistoryScreen,
  },
  {
    initialRouteName: "NewItem",
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

export default createAppContainer(navigator);
