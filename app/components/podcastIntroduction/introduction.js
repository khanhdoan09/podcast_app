import { View, StyleSheet, Pressable } from "react-native";
import Header from "./header";
import Body from "./body";
import { playPodcast } from "../../redux/actions/podcastAction";
import { useDispatch } from "react-redux";
import { AntDesign } from "@expo/vector-icons";

function Introduction({ navigation, content }) {
  const data = content.podcasts?.[0];
  const dispatch = useDispatch();
  function setPlayPodcast() {
    dispatch(playPodcast(content));
    navigation.navigate("playPodcast");
  }
  return (
    <View style={styles.container}>
      <Header
        size={data?.size}
        channel={content?.title}
        title={data?.title}
        date={data?.date?.substring(0, 10)}
      ></Header>
      <Pressable style={styles.container_play} onPress={setPlayPodcast}>
        <AntDesign
          style={styles.button_play}
          name="play"
          size={50}
          color="black"
        />
      </Pressable>
      <Body navigation={navigation} content={data?.description}></Body>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: 0,
    margin: 0,
    position: "relative",
  },
  container_play: {
    position: "absolute",
    right: "5%",
    top: "34%",
    zIndex: 100,
  },
  button_play: {
    backgroundColor: "white",
    borderRadius: 100,
    color: "red",
  },
});
export default Introduction;
