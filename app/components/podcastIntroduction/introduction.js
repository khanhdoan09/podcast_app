import { View, StyleSheet } from "react-native";
import Header from "./header";
import Body from "./body";
function Introduction({ navigation, content }) {
  console.log(content);
  const data = content.podcasts?.[0];
  return (
    <View style={styles.container}>
      <Header
        size={data?.size}
        channel={content?.title}
        title={data?.title}
        date={data?.date?.substring(0, 10)}
      ></Header>
      <Body navigation={navigation} content={data?.description}></Body>
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
