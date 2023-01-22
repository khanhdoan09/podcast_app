import { TextInput, View, StyleSheet, Pressable, Text } from "react-native";
import Item from "./Item";
import { Ionicons } from "@expo/vector-icons";
import { useState, useRef } from "react";
import axios from "axios";
import { GET_ALL_CHANNEL_LIST_BY_NAME } from "../../constants/api";

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

function Body({ navigation }) {
  const [searchName, setSearchName] = useState("");

  return (
    <View>
      <View style={styles.form}>
        <Pressable style={styles.back} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </Pressable>
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderStyle={{ fontSize: 40 }}
          onChangeText={(text) => setSearchName(text)}
          onSubmitEditing={() => {
            navigation.navigate("channelList", {
              getChannelBy: "search",
              params: searchName,
            });
          }}
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
