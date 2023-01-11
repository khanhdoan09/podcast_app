import { TextInput, View, StyleSheet, Pressable, Text } from "react-native";
import Item from "./Item";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const color = [
  "red",
  "green",
  "blue",
  "maroon",
  "brown",
  "pink",
  "purple",
  "aqua",
];

function Body() {
  const [searchName, setSearchName] = useState("");
  function submitSearch(e) {
    console.log(searchName);
  }
  return (
    <View>
      <View style={styles.form}>
        <Pressable style={styles.back}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </Pressable>
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderStyle={{ fontSize: 40 }}
          onSubmitEditing={submitSearch}
          onChangeText={(text) => setSearchName(text)}
        ></TextInput>
      </View>
      <View style={styles.history}>
        <View style={styles.title}>
          <Text style={styles.text}>Search History</Text>
          <Text style={styles.text}>Clear History</Text>
        </View>
        <View style={styles.container_item}>
          <Item name="toeic" color={color[0]}></Item>
          <Item name="shadowing" color={color[1]}></Item>
          <Item name="cnn" color={color[2]}></Item>
          <Item name="shadowing english" color={color[3]}></Item>
        </View>
      </View>
      <View style={styles.popular}>
        <View style={styles.title}>
          <Text style={styles.text}>Popular Searches</Text>
        </View>
        <View style={styles.container_item}>
          <Item name="toeic" color={color[4]}></Item>
          <Item name="shadowing" color={color[5]}></Item>
          <Item name="cnn" color={color[6]}></Item>
          <Item name="shadowing english" color={color[7]}></Item>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    paddingVertical: 0,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  back: {
    justifyContent: "center",
  },
  input: {
    height: 60,
    width: "100%",
    fontSize: 20,
    paddingHorizontal: 50,
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginVertical: 15,
  },
  text: {
    fontSize: 15,
  },
  container_item: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default Body;
