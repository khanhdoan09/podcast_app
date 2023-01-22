import Header from "../components/listChannel/Header";
import List from "../components/listChannel/List";
import { View, StyleSheet } from "react-native";
import ContinuePlay from "../components/listPodcast/ContinuePlay";
import { useEffect, useState } from "react";
import {
  GET_ALL_CHANNEL_LIST,
  GET_ALL_CHANNEL_LIST_BY_CATEGORY,
  GET_ALL_CHANNEL_LIST_BY_NAME,
} from "../constants/api";
import axios from "axios";

function ChannelList({ navigation, route }) {
  const { getChannelBy, params } = route.params;
  const [channelList, setChannelList] = useState([]);
  useEffect(() => {
    (async () => {
      try {        
        const response = await axios(
          getChannelBy === "channel"
            ? GET_ALL_CHANNEL_LIST
              : getChannelBy === "category"
              ? GET_ALL_CHANNEL_LIST_BY_CATEGORY + "?category=" + params
            : GET_ALL_CHANNEL_LIST_BY_NAME + "?name=" + params
        );
        if (response.status == 204) {
          console.log("data channel list is empty");
        } else if (response.status == 200) {
          setChannelList(
            response?.data
          );
        } else if (response.status == 500) {
          console.log("error in server");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [params]);

  return (
    <View style={styles.container}>
      <Header navigation={navigation}></Header>
      {channelList?.map((e, i) => {
        return <List key={i} data={e} navigation={navigation}></List>;
      })}

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
export default ChannelList;
