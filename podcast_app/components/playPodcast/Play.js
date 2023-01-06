import { View, Text, Pressable, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Play() {
  return (
    <View style={styles.container}>
      <View style={styles.line}>
        <View style={styles.line_active}></View>
        <View style={styles.milestone}></View>
      </View>
      <View style={styles.container_button}>
        <Pressable>
          <MaterialCommunityIcons name="rewind-30" size={40} color="white" />
        </Pressable>
        <Pressable style={styles.button_play}>
          <AntDesign name="playcircleo" size={70} color="white" />
        </Pressable>
        <Pressable>
          <MaterialCommunityIcons
            name="fast-forward-30"
            size={40}
            color="white"
          />
        </Pressable>
      </View>
      <View style={styles.container_time}>
        <Pressable>
          <Text style={styles.speed}>1,0x</Text>
        </Pressable>
        <Text style={styles.time}>00:13:25 / 00:18:27</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "maroon",
    height: "40%",
  },
  line: {
    width: "100%",
    height: 10,
    backgroundColor: "grey",
    position: "relative"
  },
  line_active: {
    width: "80%",
    height: 10,
    backgroundColor: "white",
    elevation: 5,
  },
  milestone: {
    height: 40,
    width: 40,
    borderRadius: 100,
    backgroundColor: "white",
    position: "absolute",
    top: "-120%",
    left: "80%",
    elevation: 5,
  },
  container_button: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    marginTop: 50,
  },
  button_play: {
    marginHorizontal: 85,
  },
  container_time: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 50,
  },
  speed: {
    color: "white",
    fontSize: 20,
  },
  time: {
    color: "white",
    fontSize: 20,
    marginHorizontal: 50,
  },
});
export default Play;
