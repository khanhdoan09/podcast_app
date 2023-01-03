import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import podcastList from "../screens/PodcastListScreen";
import podcastIntroduction from "../screens/PodcastIntroduction";
const Stack = createNativeStackNavigator();
function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="podcastList" component={podcastList} />
        {/* <Stack.Screen
          name="podcastIntroduction"
          component={podcastIntroduction}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
