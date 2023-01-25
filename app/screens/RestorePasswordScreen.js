import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { Ionicons } from "@expo/vector-icons";

function RestorePassword({ navigation }) {
  return (
    <View style={tw`flex-1 items-center	justify-center bg-white relative`}>
      <Pressable
        style={tw`absolute top-5 left-5`}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back-sharp" size={30} color="grey" />
      </Pressable>
      <Text style={styles.title}>Restore Password</Text>
      <Text style={styles.introduction}>
        Enter the email associated with your account and we'll send an email
        with instructions to reset your password.
      </Text>
      <View style={tw`items-center justify-center w-full`}>
        <TextInput style={styles.input} placeholder="Email"></TextInput>
        <Pressable style={[styles.input, styles.submit]}>
          <Text style={tw`text-white`}>SEND RESET INSTRUCTIONS</Text>
        </Pressable>
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
    maxWidth: 250,
    width: 250,
    marginVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
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
    marginVertical: 20
  },
});

export default RestorePassword;
