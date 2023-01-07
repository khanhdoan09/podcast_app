import { View, Image, Pressable, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { NOT_FOUND } from "../../constants/image";

function ContinuePlay() {
  const image = useSelector((state) => state?.image?.imageUrl);
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: image ? image : NOT_FOUND,
        }}
        style={styles.image}
      />
      <View style={styles.right}>
        <View style={styles.container_text}>
          <Text style={styles.title}>US chaos as Kevin McCarthy</Text>
          <Text style={styles.channel}>Global New Podcast</Text>
        </View>
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
    justifyContent: "center",
    alignContent: "center",
  },
  image: {
    width: 70,
    height: 70,
  },
  right: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  container_text: {
    justifyContent: "center",
    alignContent: "center",
    marginHorizontal: 20,
  },
  title: {
    color: "white",
    fontSize: 20,
  },
  channel: {
    color: "grey",
    fontSize: 15,
  },
  button_play: {
    backgroundColor: "black",
    color: "white",
    borderRadius: 100,
  },
});

export default ContinuePlay;
