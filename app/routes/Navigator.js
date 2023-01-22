import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PodcastList from "../screens/PodcastListScreen";
import PlayPodcast from "../screens/PlayPodcastScreen";
import ChannelList from "../screens/ChannelListScreen";
import SearchPodcast from "../screens/SearchPodcastScreen";
import CategoryList from "../screens/CategoryListScreen";

const Stack = createNativeStackNavigator();
function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="channelList" component={ChannelList} initialParams={  {
                        getChannelBy: "channel",
                        params: "default"
                      }} />
        <Stack.Screen name="categoryList" component={CategoryList} /> 
        <Stack.Screen name="playPodcast" component={PlayPodcast} />
        <Stack.Screen name="podcastList" component={PodcastList} />
        <Stack.Screen name="searchPodcast" component={SearchPodcast} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
