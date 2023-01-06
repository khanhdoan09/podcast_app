import { View, StyleSheet } from "react-native";
import Header from "./header";
import Body from "./body";
function Introduction() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <Body></Body>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: 0,
    margin: 0,
  },
});
export default Introduction;
