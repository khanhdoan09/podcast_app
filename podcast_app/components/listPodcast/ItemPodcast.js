import { Text, View, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function ItemPodCast(props) {
  const data = props.data;
  return (
    <View style={styles.container}>
      <View style={styles.date}>
        <Text style={styles.month}>
          {data?.date?.year != 2023 ? (
            <Text style={styles.month}>
              {data?.date?.day}/{data?.date?.month}
            </Text>
          ) : (
            <View style={styles.month}>
              <Text>{data?.date?.day}</Text>
              <Text>{data?.date?.month}</Text>
            </View>
          )}
        </Text>
        {data?.date?.year == 2023 ? null : (
          <Text style={styles.year}>{data?.date?.year}</Text>
        )}
      </View>
      <Text style={styles.title}>{data?.title}</Text>
      <Pressable>
        <AntDesign name="downcircleo" size={24} color="purple" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  date: {
    margin: 0,
    width: "10%",
  },
  month: {
    textAlign: "center",
    alignItems: "center",
  },
  year: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlignVertical: "center",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    width: "80%",
    height: "100%",
    marginHorizontal: 10,
    margin: 0,
    padding: 0,
  },
  circleButton: {
    width: 12,
    height: 12,
    color: "grey",
    backgroundColor: "grey",
    borderRadius: 100,
    marginHorizontal: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ItemPodCast;
