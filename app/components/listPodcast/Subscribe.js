import { Pressable, View, StyleSheet, Text } from "react-native";

function Subscribe(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.containerEpisode}>
        <Text style={styles.numberEpisode}>{props?.numberEpisode} </Text>{" "}
        Episodes
      </Text>
      <Pressable style={styles.button}>
        <Text style={styles.textButton}>Subscribe</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    width: "100%",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  containerEpisode: {
    textAlignVertical: "center",
  },
  numberEpisode: {
    fontWeight: "800",
  },
  button: {
    backgroundColor: "purple",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  textButton: {
    color: "white",
  },
});

export default Subscribe;
