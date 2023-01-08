import Header from "../components/listChannel/Header";
import List from "../components/listChannel/List";
import { View, StyleSheet } from "react-native";
import ContinuePlay from "../components/listPodcast/ContinuePlay";
function ChannelList({ navigation }) {
  return (
    <View style={styles.container}>
      <Header></Header>
      <List navigation={navigation}></List>
      <View style={styles.continue_play}>
        <ContinuePlay></ContinuePlay>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  continue_play: {
    position: "absolute",
    zIndex: 100,
    width: "100%",
    bottom: 0,
  },
});
export default ChannelList;
