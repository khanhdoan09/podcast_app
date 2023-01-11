import { View, Text, StyleSheet, Pressable } from "react-native";


function Body({ navigation, content }) {
  return (
    <View style={styles.container}>
      <Text>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
});
export default Body;
