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
import { Formik } from "formik";
import axios from "axios";
import { PUT_SIGN_UP } from "../constants/api";

const image =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Seb%27s.svg/1200px-Seb%27s.svg.png";
function SignUp({ navigation }) {
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <View style={tw`flex-1 items-center	justify-center bg-white relative`}>
      <Image
        source={{
          uri: image ? image : NOT_FOUND,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>CREATE ACCOUNT</Text>
      <View style={tw`items-center justify-center`}>
        <Formik
          initialValues={{
            name: "123",
            email: "xyz@gmail.com",
            password: "password",
          }}
          onSubmit={async (values) => {
            console.log(values);
            try {
              const response = await axios.put(PUT_SIGN_UP, {
                name: values?.name,
                email: values?.email,
                password: values?.password,
              });
              console.log(response.data);
            } catch (err) {
              console.log(err);
            }
          }}
        >
          {({ handleChange, handleSubmit, values }) => (
            <View>
              <TextInput
                style={styles.input}
                placeholder="Name"
                onChangeText={handleChange("name")}
                value={values.name}
              ></TextInput>
              <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={handleChange("email")}
                value={values.email}
              ></TextInput>
              <View>
                <TextInput
                  secureTextEntry={hidePassword ? true : false}
                  style={styles.input}
                  placeholder="Password"
                  onChangeText={handleChange("password")}
                  value={values.password}
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
              <Pressable
                style={[styles.input, styles.submit]}
                onPress={handleSubmit}
              >
                <Text style={tw`text-white`}>SIGN UP</Text>
              </Pressable>
            </View>
          )}
        </Formik>
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
