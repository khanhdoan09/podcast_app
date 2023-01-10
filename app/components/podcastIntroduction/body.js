import { View, Text, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function Body({ navigation, content }) {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.container_play}
        onPress={() => navigation.navigate("playPodcast")}
      >
        <AntDesign
          style={styles.button_play}
          name="play"
          size={50}
          color="black"
        />
      </Pressable>
      <Text>Show Notes</Text>
      <Text>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 15,
    position: "relative",
  },
  container_play: {
    position: "absolute",
    right: "5%",
    top: "-37%",
  },
  button_play: {
    backgroundColor: "white",
    borderRadius: 100,
    color: "red",
  },
});
export default Body;
