import { View, Image, Text, Pressable, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { setImageContinuePlay } from "../../redux/actions/imagePodcastAction";

function List({ navigation }) {
  const dispatch = useDispatch();
  // dispatch(
  //   setImageContinuePlay(
  //     "https://i1.sndcdn.com/artworks-000435677199-gbr875-t500x500.jpg"
  //   )
  // );
  function navigateToListPodcast() {
    dispatch(
      setImageContinuePlay(
        "https://i1.sndcdn.com/artworks-000435677199-gbr875-t500x500.jpg"
      )
    );
    navigation.navigate("podcastList");
  }
  return (
    <View style={styles.container}>
      <Pressable style={styles.channel} onPress={navigateToListPodcast}>
        <Image
          source={{
            uri: "https://i1.sndcdn.com/artworks-000435677199-gbr875-t500x500.jpg",
          }}
          style={styles.image}
        />
        <View style={styles.right}>
          <Pressable style={styles.text} onPress={navigateToListPodcast}>
            <Text style={styles.name}>Global News Podcast</Text>
            <Text style={styles.description}>
              The day's top stories from BBC News
            </Text>
          </Pressable>
          <Pressable style={styles.button}>
            <AntDesign name="pluscircleo" size={30} color="purple" />
          </Pressable>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  channel: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 5,
    width: "100%",
  },
  image: {
    height: 70,
    width: 70,
  },
  right: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    justifyContent: "space-between",
    marginLeft: 10,
  },
  text: {
    justifyContent: "center",
    paddingHorizontal: 5,
  },
  name: { fontSize: 18 },
  description: { fontSize: 13, color: "grey" },
  button: {
    justifyContent: "center",
  },
});

export default List;
