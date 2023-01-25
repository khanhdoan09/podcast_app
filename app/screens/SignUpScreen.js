import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import { NOT_FOUND } from "../constants/image";
import tw from "tailwind-react-native-classnames";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

const image =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Seb%27s.svg/1200px-Seb%27s.svg.png";
function SignUp({ navigation }) {
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <View style={tw`flex-1 items-center	justify-center bg-white relative`}>
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
      <Text style={styles.title}>CREATE ACCOUNT</Text>
      <View style={tw`items-center justify-center`}>
        <TextInput style={styles.input} placeholder="Name"></TextInput>
        <TextInput style={styles.input} placeholder="Email"></TextInput>
        <View>
          <TextInput
            secureTextEntry={hidePassword ? true : false}
            style={styles.input}
            placeholder="Password"
          ></TextInput>
          <Pressable
            style={tw`absolute top-7 right-2`}
            onPress={() => {
              setHidePassword(!hidePassword);
            }}
          >
            {hidePassword ? (
              <AntDesign name="eyeo" size={24} color="grey" />
            ) : (
              <Feather name="eye-off" size={24} color="grey" />
            )}
          </Pressable>
        </View>
        <Pressable style={[styles.input, styles.submit]}>
          <Text style={tw`text-white`}>SIGN UP</Text>
        </Pressable>
        <View style={tw`flex-row items-center`}>
          <Text>Already have an account?</Text>
          <Pressable onPress={() => navigation.navigate("signIn")}>
            <Text style={styles.signIn}>Sign In</Text>
          </Pressable>
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
  },
  submit: {
    borderWidth: 0,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    backgroundColor: "rgb(120,51,232)",
  },
  signIn: {
    marginHorizontal: 10,
    color: "blue",
  },
  image: {
    width: 200,
    height: 200,
    tintColor: "rgb(120,51,232)",
  },
  title: {
    fontSize: 25,
    marginTop: 15,
    color: "rgb(120,51,232)",
    fontWeight: "700",
  },
});

export default SignUp;
