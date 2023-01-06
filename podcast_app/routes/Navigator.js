import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import podcastList from "../screens/PodcastListScreen";
import playPodcast from "../screens/PlayPodcastScreen";
const Stack = createNativeStackNavigator();
function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* <Stack.Screen name="podcastList" component={podcastList} /> */}
        <Stack.Screen name="playPodcast" component={playPodcast} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
