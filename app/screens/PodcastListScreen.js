import {
  ScrollView,
  Text,
  View,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Pressable,
} from "react-native";
import Header from "../components/listPodcast/Header";
import ItemPodCast from "../components/listPodcast/ItemPodcast";
import Subscribe from "../components/listPodcast/Subscribe";
import { useState } from "react";
import Introduction from "../components/podcastIntroduction/introduction";
import ContinuePlay from "../components/listPodcast/ContinuePlay";
function PodcastList({ navigation }) {
  const goBack = navigation.goBack;
  const data = [
    {
      date: { day: 2, month: "Th1", year: 2023 },
      title: "Pope Francis leads tributes to Benedict XVI",
    },
    {
      date: { day: 31, month: "12", year: 2022 },
      title: "Tax return show Trump paid nothing in 2020",
    },
    {
      date: { day: 31, month: "12", year: 2022 },
      title: "Tax return show Trump paid nothing in 2020",
    },
    {
      date: { day: 31, month: "12", year: 2022 },
      title: "Tax return show Trump paid nothing in 2020",
    },
    {
      date: { day: 31, month: "12", year: 2022 },
      title: "Tax return show Trump paid nothing in 2020",
    },
    {
      date: { day: 31, month: "12", year: 2022 },
      title: "Tax return show Trump paid nothing in 2020",
    },
    {
      date: { day: 31, month: "12", year: 2022 },
      title: "Tax return show Trump paid nothing in 2020",
    },
    {
      date: { day: 31, month: "12", year: 2022 },
      title: "Tax return show Trump paid nothing in 2020",
    },
    {
      date: { day: 31, month: "12", year: 2022 },
      title: "Tax return show Trump paid nothing in 2020",
    },
    {
      date: { day: 31, month: "12", year: 2022 },
      title: "Tax return show Trump paid nothing in 2020",
    },
    {
      date: { day: 31, month: "12", year: 2022 },
      title: "Tax return show Trump paid nothing in 2020",
    },
    {
      date: { day: 31, month: "12", year: 2022 },
      title: "Tax return show Trump paid nothing in 2020",
    },
    {
      date: { day: 31, month: "12", year: 2022 },
      title: "Tax return show Trump paid nothing in 2020",
    },
    {
      date: { day: 31, month: "12", year: 2022 },
      title: "Tax return show Trump paid nothing in 2020",
    },
    {
      date: { day: 31, month: "12", year: 2022 },
      title: "Tax return show Trump paid nothing in 2020",
    },
    {
      date: { day: 31, month: "12", year: 2022 },
      title: "Tax return show Trump paid nothing in 2020",
    },
  ];

  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <Header isOpacity={showModal} goBack={goBack}></Header>
      </View>
      <Subscribe numberEpisode={data.length}></Subscribe>
      <Modal animationType={"slide"} transparent={true} visible={showModal}>
        <TouchableWithoutFeedback onPress={() => setShowModal(!showModal)}>
          <View style={styles.modalOverlay}></View>
        </TouchableWithoutFeedback>
        <View style={styles.modal}>
          <Introduction navigation={navigation}></Introduction>
        </View>
      </Modal>
      <ScrollView>
        {data.map((e, i) => (
          <ItemPodCast
            key={i}
            data={e}
            navigation={navigation}
            setShowModal={setShowModal}
          ></ItemPodCast>
        ))}
      </ScrollView>
      <View style={styles.continue_play}>
        <ContinuePlay></ContinuePlay>
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
