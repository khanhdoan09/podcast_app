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
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { PUT_SIGN_IN } from "../constants/api";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

const image =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Seb%27s.svg/1200px-Seb%27s.svg.png";
function SignIn({ navigation }) {
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <View style={tw`flex-1 items-center	justify-center bg-white relative`}>
      <Image
        source={{
          uri: image ? image : NOT_FOUND,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>WELCOME</Text>
      <View style={tw`items-center justify-center w-full`}>
        <Formik
          initialValues={{
            email: "xyz@gmail.com",
            password: "password",
          }}
          onSubmit={async (values) => {
            try {
              const response = await axios.put(PUT_SIGN_IN, {
                email: values?.email,
                password: values?.password,
              });
              if (response.status === 200) {
                const token = response?.data?.message;
                console.log(token.accessToken);
                await SecureStore.setItemAsync(
                  "secureAccessToken",
                  token.accessToken
                );
                // await SecureStore.setItemAsync(
                //   "secureRefreshToken",
                //   token.refreshToken
                // );
              }
            } catch (err) {
              console.log(err);
            }
          }}
          validationSchema={yup.object().shape({
            email: yup.string().email().required("Email is required"),
            password: yup.string().required("Password is required"),
          })}
        >
          {({ handleChange, handleSubmit, touched, errors, values }) => (
            <View>
              <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={handleChange("email")}
                value={values.email}
              ></TextInput>
              {touched.email && errors.email && (
                <Text style={{ fontSize: 12, color: "#FF0D10" }}>
                  {errors.email}
                </Text>
              )}
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
                {touched.password && errors.password && (
                  <Text style={{ fontSize: 12, color: "#FF0D10" }}>
                    {errors.password}
                  </Text>
                )}
              </View>
              <View>
                <Pressable
                  style={tw`items-end w-full px-4 `}
                  onPress={() => navigation.navigate("restorePassword")}
                >
                  <Text style={styles.grey}>Forgot your password?</Text>
                </Pressable>
              </View>
              <Pressable
                style={[styles.input, styles.submit]}
                onPress={handleSubmit}
              >
                <Text style={tw`text-white`}>SIGN IN</Text>
              </Pressable>
            </View>
          )}
        </Formik>
        <View style={tw`flex-row items-center`}>
          <Text style={styles.grey}>Don't have an account?</Text>
          <Pressable onPress={() => navigation.navigate("signUp")}>
            <Text style={styles.signUp}>Sign Up</Text>
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
  signUp: {
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
  grey: {
    color: "grey",
  },
});

export default SignIn;
