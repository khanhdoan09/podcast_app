import { View, Text, StyleSheet } from "react-native";
function introduction() {
  return (
    <View style={styles.container}>
      <Text>Show Notes</Text>
      <Text>
        It's the highest number of deaths acknowledged by Moscow for a single
        incident since the war began. Also: people turn out in large numbers to
        pay their last respects to former Pope Benedict in the Vatican and the
        footballer Pele in Brazil; and Price Harry says he wants his father King
        Charles and his brother Price William back.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
});
export default introduction;
