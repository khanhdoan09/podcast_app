import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PodcastList from "../screens/PodcastListScreen";
import PlayPodcast from "../screens/PlayPodcastScreen";
import ChannelList from "../screens/ChannelListScreen";

const Stack = createNativeStackNavigator();
function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="channelList" component={ChannelList} />
        <Stack.Screen name="playPodcast" component={PlayPodcast} />
        <Stack.Screen name="podcastList" component={PodcastList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;