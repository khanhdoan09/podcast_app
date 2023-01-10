import { Text, View, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function ItemPodCast(props) {
  const data = props?.data?.podcasts?.[0];
  const year = data?.date?.substring(0, 4);
  const month = data?.date?.substring(5, 7);
  const day = data?.date?.substring(8, 10);
  const currentYear = new Date().getFullYear();
  function activeIntroduction() {
    props.setShowModal(true);
    props.setContentModal(props?.data);
  }
  return (
    <View style={styles.container}>
      <Pressable style={styles.date} onPress={activeIntroduction}>
        <Text style={styles.month}>
          {year != currentYear ? (
            <Text style={styles.month}>
              {day}/{month}
            </Text>
          ) : (
            <View style={styles.month}>
              <Text>{day}</Text>
              <Text>{month}</Text>
            </View>
          )}
        </Text>
        {year == currentYear ? null : <Text style={styles.year}>{year}</Text>}
      </Pressable>
      <View style={styles.right}>
        <Pressable onPress={activeIntroduction}>
          <Text style={styles.title}>
            {data?.title ? data?.title : "not found title"}
          </Text>
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
