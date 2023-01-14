import {
  ScrollView,
  View,
  Modal,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
} from "react-native";
import Header from "../components/listPodcast/Header";
import ItemPodCast from "../components/listPodcast/ItemPodcast";
import Subscribe from "../components/listPodcast/Subscribe";
import { useEffect, useState } from "react";
import Introduction from "../components/podcastIntroduction/introduction";
import ContinuePlay from "../components/listPodcast/ContinuePlay";
import { GET_ALL_PODCAST_LIST_BY_CHANNEL } from "../constants/api";
import axios from 'axios';

function PodcastList({ navigation, route }) {
  const goBack = navigation.goBack;
  const channel = route.params.channel;
  const [podcastList, setPodcastList] = useState([]);
  const [image, setImage] = useState(undefined);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios(
          GET_ALL_PODCAST_LIST_BY_CHANNEL + `?channel=${channel}`
        );
        if (response.status == 200) {
          const data = response.data;
          setPodcastList(data);
          setImage(data?.[0]?.avatar)
        } else if (response.status == 204) {
          console.log("data podcast list is empty");
        } else if (response.status == 500) {
          console.log("error in server");
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  useEffect(() => {
    navigation.addListener("focus", () => {
      setShowModal(false);
    });
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [contentModal, setContentModal] = useState({});

  return (
    <View style={styles.container}>
      <View>
        <Header isOpacity={showModal} goBack={goBack} image={image}></Header>
      </View>
      <Subscribe
        numberEpisode={podcastList?.[0]?.podcasts?.length ?? "không xác định"}
      ></Subscribe>
      <Modal animationType={"slide"} transparent={true} visible={showModal}>
        <TouchableWithoutFeedback onPress={() => setShowModal(!showModal)}>
          <View style={styles.modalOverlay}></View>
        </TouchableWithoutFeedback>
        <View style={styles.modal}>
          <Introduction
            navigation={navigation}
            content={{
              content: contentModal,
              avatar: podcastList?.[0]?.avatar,
              channel: podcastList?.[0]?.title,
            }}
          ></Introduction>
        </View>
      </Modal>
      <ScrollView>
        {podcastList?.[0]?.podcasts?.map((e, i) => (
          <ItemPodCast
            key={i}
            data={e}
            navigation={navigation}
            setShowModal={setShowModal}
            setContentModal={setContentModal}
          ></ItemPodCast>
        ))}
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
  modalOverlay: {
    position: "absolute",
    height: "30%",
    width: "100%",
  },
  modal: {
    zIndex: 3, // works on ios
    elevation: 3, // works on android
    position: "absolute",
    height: "70%",
    width: "100%",
    bottom: 0,
    margin: 0,
    padding: 0,
    backgroundColor: "white",
  },
  continue_play: {
    position: "absolute",
    zIndex: 100,
    width: "100%",
    bottom: 0,
  },
});
export default PodcastList;
