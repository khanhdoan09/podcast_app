import { View } from "react-native";
import Header from "../components/listPodcast/Header";
import Play from "../components/playPodcast/Play";
function playPodcast() {
  return (
    <View>
      <Header height={"60%"} title={"text123"}></Header>
      <Play></Play>
    </View>
  );
}

export default playPodcast;
