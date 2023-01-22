import { View, Pressable, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";

function Header({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.left}>
          <Pressable>
            <AntDesign name="bars" size={24} color="grey" />
          </Pressable>
          <Text style={styles.title}>Podcasts</Text>
        </View>
        <View style={styles.right}>
          <Pressable
            style={styles.search}
            onPress={() => navigation.navigate("searchPodcast")}
          >
            <Feather name="search" size={24} color="grey" />
          </Pressable>
          <Pressable>
            <Entypo name="dots-three-vertical" size={24} color="grey" />
          </Pressable>
        </View>
      </View>
      <View style={tw`flex-row px-2 py-2 border-b-2`}>
        <Pressable
          onPress={() =>
            navigation.navigate("channelList", {
              getChannelBy: "channel",
              params: null,
            })
          }
        >
          <Text style={styles.navigation_text}>CHANNEL</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("categoryList")}>
          <Text style={styles.navigation_text}>CATEGORIES</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingVertical: 25,
    paddingHorizontal: 25,
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
  navigation_text: {
    color: "purple",
    fontSize: 15,
    marginHorizontal: 20,
  },
});

export default Header;
