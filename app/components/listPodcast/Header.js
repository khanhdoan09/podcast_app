import { Text, View, Pressable, StyleSheet, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { NOT_FOUND } from "../../constants/image";

function Header(props) {
  const image = useSelector((state) => state?.podcast?.avatar) ?? props.image;
  return (
    <View
      style={[
        styles.container,
        props.isOpacity ? styles.opacity : null,
        props?.height ? { height: props?.height } : null,
      ]}
    >
      <View style={styles.containerHeader}>
        <Pressable style={styles.headerButton} onPress={() => props.goBack()}>
          <AntDesign name="arrowleft" style={styles.headerButton} />
        </Pressable>
        {props?.title ? <Text style={styles.title}>{props.title}</Text> : null}
        <Pressable style={styles.headerButton}>
          <Entypo name="dots-three-vertical" style={styles.headerButton} />
        </Pressable>
      </View>
      <View style={styles.containImage}>
        <Image
          source={{
            uri: image ? image : NOT_FOUND,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.containCircleButton}>
        <Pressable style={styles.circleButton}></Pressable>
        <Pressable style={styles.circleButton}></Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
  },
  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: "red",
  },
  headerButton: {
    color: "white",
    fontSize: 20,
    paddingTop: 10,
  },
  containImage: {
    alignItems: "center",
    marginVertical: 30,
  },
  image: {
    height: 200,
    width: 200,
    resizeMode: "contain",
  },
  containCircleButton: {
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 10,
  },
  circleButton: {
    width: 10,
    height: 10,
    color: "grey",
    backgroundColor: "grey",
    borderRadius: 100,
    marginHorizontal: 2,
  },
  opacity: {
    opacity: 0.1,
  },
  title: {
    color: "white",
    fontSize: 20,
    marginTop: 5,
  },
});

export default Header;
