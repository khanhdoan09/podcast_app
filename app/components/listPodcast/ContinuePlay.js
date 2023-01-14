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
import tw from "tailwind-react-native-classnames";

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
      <Pressable style={tw`flex-1	h-16 w-16`} onPress={navigatePlayPodcastScreen}>
        <Image
          source={{
            uri: image ? image : NOT_FOUND,
          }}
          style={styles.image}
        />
      </Pressable>
      <View style={tw`flex-row items-center justify-end	 px-1`}>
        <Pressable
          style={tw`justify-center  mx-7`}
          onPress={navigatePlayPodcastScreen}
        >
          <Text style={tw`text-white text-sm`}>
            {title ?? "undefined podcast title"}
          </Text>
          <Text style={tw`text-gray-500 text-xs	`}>
            {channel ?? "undefined podcast channel"}
          </Text>
        </Pressable>
        <Pressable style={styles.button}>
          <AntDesign
            style={tw`bg-black rounded-full text-white`}
            name="play"
            size={40}
          />
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
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

export default ContinuePlay;
