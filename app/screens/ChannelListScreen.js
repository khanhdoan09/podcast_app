import Header from "../components/listChannel/Header";
import List from "../components/listChannel/List";
import { View, StyleSheet } from "react-native";
import ContinuePlay from "../components/listPodcast/ContinuePlay";
import { useEffect, useState } from "react";
import { GET_ALL_CHANNEL_LIST } from "../constants/api";
import axios from 'axios';



function ChannelList({ navigation }) {
  const [channelList, setChannelList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios(GET_ALL_CHANNEL_LIST);
        if (response.status == 204) {
          console.log("data channel list is empty");
        } else if (response.status == 200) {         
          setChannelList(response.data);
        }
        else if (response.status == 500) {
          console.log("error in server");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Header navigation={navigation}></Header>
      {channelList.map((e, i) => {
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
