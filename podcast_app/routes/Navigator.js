import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListPodcast from "../screens/ListPodcastScreen";
// import PlayPodcast from "../screens/PlayPodcastScreen";

const Stack = createNativeStackNavigator();
function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="ListPodcast" component={ListPodcast} />
        {/* <Stack.Screen name="PlayPodCast" component={PlayPodcast} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
