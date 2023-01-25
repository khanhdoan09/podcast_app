import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Ionicons } from "@expo/vector-icons";

function CheckMail({ navigation }) {
  const image =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Seb%27s.svg/1200px-Seb%27s.svg.png";

  return (
    <View style={tw`flex-1 items-center	justify-center bg-white relative pb-10`}>
      <Pressable
        style={tw`absolute top-5 left-5`}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back-sharp" size={30} color="grey" />
      </Pressable>
      <Image
        source={{
          uri: image ? image : NOT_FOUND,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>Check Your Mail</Text>
      <Text style={styles.introduction}>
        We have sent a password recover instructions to your email
      </Text>
      <View style={tw`items-center justify-center w-full`}>
        <Pressable style={[styles.input, styles.submit]}>
          <Text style={tw`text-white`}>OPEN EMAIL APP</Text>
        </Pressable>
      </View>
      <Text style={styles.introduction}>Skip, I'll confirm later</Text>
      <View style={tw`absolute bottom-20`}>
        <Text style={styles.introduction}>
          Didn't receive the email? Check spam filter,
        </Text>
        <View style={tw`flex-row justify-center`}>
          <Text style={styles.grey}>or</Text>
          <Text style={styles.again_text}>try another email address</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    borderColor: "grey",
    borderWidth: 2.2,
    maxHeight: 50,
    height: 50,
    maxWidth: 290,
    width: 290,
    marginVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    position: "relative",
  },
  submit: {
    borderWidth: 0,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    backgroundColor: "rgb(120,51,232)",
  },
  title: {
    fontSize: 25,
    marginTop: 15,
    color: "rgb(120,51,232)",
    fontWeight: "700",
  },
  introduction: {
    maxWidth: 290,
    width: 290,
    marginVertical: 20,
    textAlign: "center",
    color: "grey",
    fontSize: 15,
  },
  again_text: {
    color: "rgb(120,51,232)",
    marginLeft: 5,
  },
  grey: {
    color: "grey",
  },
  image: {
    width: 200,
    height: 200,
    tintColor: "rgb(120,51,232)",
  },
});

export default CheckMail;
