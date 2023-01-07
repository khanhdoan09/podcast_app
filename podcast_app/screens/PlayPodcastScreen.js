import { View } from "react-native";
import Header from "../components/listPodcast/Header";
import Play from "../components/playPodcast/Play";
function PlayPodcast({ navigation }) {
  return (
    <View>
      <Header height={"60%"} title={"oke"} navigation={navigation}></Header>
      <Play></Play>
    </View>
  );
}

export default PlayPodcast;
