import {
  ImageBackground,
  View,
  Image,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { DEFAULT_AVATAR } from "../constants/image";
import tw from "tailwind-react-native-classnames";

function Navigation({ navigation }) {
  const image = undefined;

  return (
    <View style={tw`flex-1 relative`}>
      <View style={tw`h-1/3`}>
        <ImageBackground
          source={{
            uri: "https://p4.wallpaperbetter.com/wallpaper/478/602/376/black-background-minimalism-mountains-sunset-wallpaper-preview.jpg",
          }}
          resizeMode="cover"
          style={tw`flex-1 justify-end`}
        >
          <Pressable
            style={tw`absolute top-5 left-3`}
            onPress={() => navigation.goBack()}
          >
            <AntDesign name="arrowleft" size={28} color={"white"} />
          </Pressable>
          <View style={tw`flex-row items-center py-5 px-3`}>
            <Image
              source={{
                uri: image ? image : DEFAULT_AVATAR,
              }}
              style={tw`rounded-full h-20 w-20`}
            />
            <View style={tw`mx-5`}>
              <Text style={tw`text-white`}>Khanh Doan</Text>
              <Text style={tw`text-white`}>khanhdoan14.kd@gmail.com</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={tw`my-8`}>
        <View style={tw`flex-row items-center p-5`}>
          <Ionicons name="md-home-outline" size={24} color="black" />
          <Text style={tw`mx-5 text-gray-600 text-base`}>Home</Text>
        </View>
        <View style={tw`flex-row items-center p-5`}>
          <AntDesign name="search1" size={30} color="text-gray-600" />
          <Text style={tw`mx-5 text-gray-600 text-base`}>Search</Text>
        </View>
        <View style={tw`flex-row items-center p-5`}>
          <Ionicons
            name="heart-circle-outline"
            size={30}
            color="text-gray-600"
          />
          <Text style={tw`mx-5 text-gray-600 text-base`}>Subscribed</Text>
        </View>
        <View style={tw`flex-row items-center p-5`}>
          <Ionicons
            name="ios-notifications-outline"
            size={24}
            color="text-gray-600"
          />
          <Text style={tw`mx-5 text-gray-600 text-base`}>Notifications</Text>
        </View>
        <View style={tw`flex-row items-center p-5`}>
          <SimpleLineIcons name="settings" size={24} color="text-gray-600" />
          <Text style={tw`mx-5 text-gray-600 text-base`}>Settings</Text>
        </View>
        <Pressable style={tw`flex-row items-center p-5`} onPress={()=>navigation.navigate("signIn")}>
          <SimpleLineIcons name="login" size={24} color="black" />
          <Text style={tw`mx-5 text-gray-600 text-base`}>Sign In</Text>
          {/* <SimpleLineIcons name="logout" size={24} color="black" />
          <Text style={tw`mx-5 text-gray-600 text-base`}>Sign Out</Text> */}
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(171,171,171)",
  },
  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: "rgb(171,171,171)",
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

export default Navigation;
