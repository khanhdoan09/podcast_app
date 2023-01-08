import { View } from "react-native";
import Header from "../components/listPodcast/Header";
import Play from "../components/playPodcast/Play";
function PlayPodcast({ navigation }) {
  const goBack = navigation.goBack;
  return (
    <View>
      <Header height={"60%"} title={"oke"} goBack={goBack}></Header>
      <Play></Play>
    </View>
  );
}

export default PlayPodcast;
