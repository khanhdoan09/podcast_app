import { View, Image, Text, Pressable, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { NOT_FOUND } from "../../constants/image";

function List({ navigation, data }) {
  function navigateToListPodcast() {
    navigation.navigate("podcastList", {channel: data._id});
  }
  return (
    <View style={styles.container}>
      <Pressable style={styles.channel} onPress={navigateToListPodcast}>
        <Image
          source={{
            uri: data.avatar ?? NOT_FOUND,
          }}
          style={styles.image}
        />
        <View style={styles.right}>
          <Pressable style={styles.text} onPress={navigateToListPodcast}>
            <Text style={styles.name}>
              {data.title ?? "not found channel title"}
            </Text>
            <Text style={styles.description}>
              {data.description ?? "not found channel description"}
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
    flex: 1,
    width: 70,
    height: 70,
    resizeMode: "contain",
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
