import { Pressable, View, Text, ScrollView, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Header from "../components/listChannel/Header";
import tw from "tailwind-react-native-classnames";
import ContinuePlay from "../components/listPodcast/ContinuePlay";
import { useEffect, useState } from "react";
import {
  GET_ALL_CATEGORY,
  GET_ALL_CHANNEL_LIST_BY_CATEGORY,
} from "../constants/api";
import axios from "axios";
import React from "react";

function CategoryList({ navigation }) {
  const [categoryList, setCategoryList] = useState(undefined);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios(GET_ALL_CATEGORY);
        if (response.status == 204) {
          console.log("data category list is empty");
        } else if (response.status == 200) {
          setCategoryList(response.data);
        } else if (response.status == 500) {
          console.log("error in server");
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  async function getAllChannelByCategory(type) {
    try {
      const response = await axios(
        GET_ALL_CHANNEL_LIST_BY_CATEGORY + `?category=${type}`
      );
      if (response.status == 204) {
        console.log("data category list is empty");
      } else if (response.status == 200) {
      } else if (response.status == 500) {
        console.log("error in server");
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View style={styles.container}>
      <Header navigation={navigation}></Header>
      <ScrollView>
        {categoryList
          ? categoryList?.map((e, i) => {
              const icon = e?.icon?.element;
              const nameIcon = e?.icon?.name;
              return (
                <Pressable
                  key={i}
                  style={tw`flex-row items-center pl-4 `}
                  onPress={() => {
                    navigation.navigate("channelList", {
                      getChannelBy: "category",
                      params: e.type,
                    });
                  }}
                >
                  {icon == "FontAwesome5" ? (
                    <FontAwesome5 name={nameIcon} size={24} color="grey" />
                  ) : "MaterialIcons" ? (
                    <MaterialIcons name={nameIcon} size={24} color="grey" />
                  ) : "FontAwesome" ? (
                    <FontAwesome name={nameIcon} size={24} color="grey" />
                  ) : "AntDesign" ? (
                    <AntDesign name={nameIcon} size={24} color="grey" />
                  ) : null}
                  <Text style={tw`mx-4 border-b-2  w-full py-3`}>{e.type}</Text>
                </Pressable>
              );
            })
          : null}
      </ScrollView>
      <View style={styles.continue_play}>
        <ContinuePlay navigation={navigation}></ContinuePlay>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  continue_play: {
    position: "absolute",
    zIndex: 100,
    width: "100%",
    bottom: 0,
  },
});
export default CategoryList;
