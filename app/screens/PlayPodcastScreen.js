import { View, AsyncStorage } from "react-native";
import { useSelector } from "react-redux";
import Header from "../components/listPodcast/Header";
import Play from "../components/playPodcast/Play";
import { useEffect, useState } from "react";

function PlayPodcast({ navigation }) {
  useEffect(() => {
    AsyncStorage.getItem("podcastContinuePlay").then((continuePlayPodcast) => {
      setPodcast(JSON.parse(continuePlayPodcast));
    });
  }, []);
  const [podcast, setPodcast] = useState({});
  const title =
    useSelector((state) => state?.podcast?.content?.title) ??
    podcast?.content?.title;
  const image =
    useSelector((state) => state?.podcast?.avatar) ?? podcast?.avatar;
  const time =
    useSelector((state) => state?.podcast?.content?.time) ??
    podcast?.content?.time;
  const linkAudio = useSelector((state) => state?.podcast?.content?.link);
  const goBack = navigation.goBack;
  return (
    <View>
      <Header
        height={"60%"}
        title={title ?? "undefined podcast title"}
        image={image}
        goBack={goBack}
      ></Header>
      <Play time={time} linkAudio={linkAudio}></Play>
    </View>
  );
}

export default PlayPodcast;
