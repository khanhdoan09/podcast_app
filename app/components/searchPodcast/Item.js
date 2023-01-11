import { View, Text, StyleSheet } from "react-native";
function Item({ name, color }) {
  return (
    name && (
      <View style={[styles.container, { backgroundColor: color }]}>
        <Text style={styles.text}>{name}</Text>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: "center",
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 15,
  },

  text: {
    color: "white",
    fontSize: 20,
  },
});

export default Item;
