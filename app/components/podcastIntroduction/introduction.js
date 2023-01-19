import { View, StyleSheet, Pressable, AsyncStorage } from "react-native";
import Header from "./header";
import Body from "./body";
import { playPodcast } from "../../redux/actions/podcastAction";
import { useDispatch } from "react-redux";
import { AntDesign } from "@expo/vector-icons";

function Introduction({ navigation, content }) {
  const dispatch = useDispatch();
  function setPlayPodcast() {
    dispatch(playPodcast(content));
    AsyncStorage.setItem("podcastContinuePlay", JSON.stringify(content))
    navigation.navigate("playPodcast");    
  }
  return (
    <View style={styles.container}>
      <Header
        size={content?.content?.size}
        channel={content?.content?.title}
        title={content?.content?.title}
        date={content?.content?.date?.substring(0, 10)}
      ></Header>
      <Pressable style={styles.container_play} onPress={setPlayPodcast}>
        <AntDesign
          style={styles.button_play}
          name="play"
          size={50}
          color="black"
        />
      </Pressable>
      <Body navigation={navigation} content={content?.content?.description}></Body>
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
    color: "rgb(178,178,178)",
  },
});
export default Introduction;
