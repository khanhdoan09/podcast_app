import { View } from "react-native";
import { useSelector } from "react-redux";
import Header from "../components/listPodcast/Header";
import Play from "../components/playPodcast/Play";
function PlayPodcast({ navigation }) {
  const title = useSelector((state) => state?.podcast?.podcasts?.[0]?.title);
  const time = useSelector((state) => state?.podcast?.podcasts?.[0]?.time);
  const goBack = navigation.goBack;
  return (
    <View>
      <Header height={"60%"} title={title ?? "undefined podcast title"} goBack={goBack}></Header>
      <Play time={time}></Play>
    </View>
  );
}

export default PlayPodcast;
