import { View, StyleSheet } from "react-native";
import Header from "./header";
import Introduction from "./body";
function podcastIntroduction() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <Introduction></Introduction>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: 0,
    margin: 0,
  },
});
export default podcastIntroduction;
