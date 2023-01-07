import { View, Text, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function Body({ navigation }) {
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
      <Text>
        It's the highest number of deaths acknowledged by Moscow for a single
        incident since the war began. Also: people turn out in large numbers to
        pay their last respects to former Pope Benedict in the Vatican and the
        footballer Pele in Brazil; and Price Harry says he wants his father King
        Charles and his brother Price William back.
      </Text>
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
