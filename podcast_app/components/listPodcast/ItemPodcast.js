import { Text, View, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function ItemPodCast(props) {
  const data = props.data;
  return (
    <View style={styles.container}>
      <Pressable style={styles.date} onPress={() => props.setShowModal(true)}>
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
      </Pressable>
      <View style={styles.right}>
        <Pressable onPress={() => props.setShowModal(true)}>
          <Text style={styles.title}>{data?.title}</Text>
        </Pressable>
        <Pressable>
          <AntDesign name="downcircleo" size={24} color="purple" />
        </Pressable>
      </View>
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
    marginLeft: 10,
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
  right: {
    flexDirection: "row",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginHorizontal: 10,
    paddingVertical: 10,
    width: "90%",
    justifyContent: "space-between",
  },
  title: {
    textAlignVertical: "center",
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
    textAlignVertical: "center",
  },
});

export default ItemPodCast;
