import { View, Pressable, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Pressable>
          <AntDesign name="bars" size={24} color="grey" />
        </Pressable>
        <Text style={styles.title}>Podcasts</Text>
      </View>
      <View style={styles.right}>
        <Pressable style={styles.search}>
          <Feather name="search" size={24} color="grey" />
        </Pressable>
        <Pressable>
          <Entypo name="dots-three-vertical" size={24} color="grey" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingVertical: 25,
    paddingHorizontal: 25,
    borderBottomColor: "grey",
    borderBottomWidth: 2,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    paddingLeft: 20,
    color: "grey",
  },
  search: {
    paddingRight: 10,
  },
});

export default Header;
