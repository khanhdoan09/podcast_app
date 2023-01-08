import { View, Text, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function header() {
  return (
    <View style={styles.container}>
      <View style={styles.channel}>
        <Text style={styles.name}>Global News Podcast</Text>
        <View>
          <AntDesign
            name="star"
            size={24}
            color="white"
            backgroundColor="white"
          />
        </View>
      </View>
      <View style={styles.text}>
        <Text style={styles.title}>Ukrainian strike kills 63 Russians</Text>
        <Text style={styles.date}>3 Th1</Text>
      </View>
      <View style={styles.download}>
        <Pressable>
          <AntDesign name="downcircleo" size={24} color="purple" />
        </Pressable>
        <Text style={styles.download_text}>Download</Text>
        <Text style={styles.mb}>13 MB</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    paddingTop: 20,
  },
  channel: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  name: {
    color: "grey",
  },
  text: {
    paddingHorizontal: 10,
    marginVertical: 10,
    color: "white",
  },
  title: {
    color: "white",
  },
  date: {
    color: "white",
    marginTop: 25,
  },
  download: {
    flexDirection: "row",
    backgroundColor: "brown",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  download_text: {
    color: "white",
    marginHorizontal: 10,
    textAlignVertical: "center",
  },
  mb: {
    textAlignVertical: "center",
  },
});

export default header;
