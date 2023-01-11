import {
  View,
  Image,
  Pressable,
  StyleSheet,
  Text,
  AsyncStorage,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { NOT_FOUND } from "../../constants/image";
import { useEffect, useState } from "react";

function ContinuePlay({ navigation }) {
  const [podcast, setPodcast] = useState({});
  // lấy podcast khi đang dùng app lần trước
  useEffect(() => {
    AsyncStorage.getItem("podcastContinuePlay").then((continuePlayPodcast) => {
      setPodcast(JSON.parse(continuePlayPodcast));
    });
  }, []);
  // state này là do khi đã chọn podcast mới nên
  const image =
    useSelector((state) => state?.podcast?.avatar) ?? podcast?.avatar;
  const title =
    useSelector((state) => state?.podcast?.content?.title) ??
    podcast?.content?.title;
  const channel =
    useSelector((state) => state?.podcast?.channel) ?? podcast?.channel;
  function navigatePlayPodcastScreen() {
    navigation.navigate("playPodcast");
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.left} onPress={navigatePlayPodcastScreen}>
        <Image
          source={{
            uri: image ? image : NOT_FOUND,
          }}
          style={styles.image}
        />
      </Pressable>
      <View style={styles.right}>
        <Pressable
          style={styles.container_text}
          onPress={navigatePlayPodcastScreen}
        >
          <Text style={styles.title}>{title ?? "undefined podcast title"}</Text>
          <Text style={styles.channel}>
            {channel ?? "undefined podcast channel"}
          </Text>
        </Pressable>
        <Pressable style={styles.button}>
          <AntDesign style={styles.button_play} name="play" size={40} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "maroon",
    flexDirection: "row",
    alignContent: "space-between",
  },
  left: { flex: 1, width: 70, height: 70 },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 9,
  },
  container_text: {
    justifyContent: "center",
    alignContent: "center",
    marginHorizontal: 20,
  },
  title: {
    color: "white",
    fontSize: 15,
  },
  channel: {
    color: "grey",
    fontSize: 10,
  },
  button_play: {
    backgroundColor: "black",
    color: "white",
    borderRadius: 100,
  },
});

export default ContinuePlay;
