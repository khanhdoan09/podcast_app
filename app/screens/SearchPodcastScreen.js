import { View, Text } from "react-native";
import Body from "../components/searchPodcast/Body";

function SearchPodcastScreen({navigation}) {
  return (
    <View>
      <Body navigation={navigation}></Body>
    </View>
  );
}

export default SearchPodcastScreen;
