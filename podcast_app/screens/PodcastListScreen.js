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
import PodcastIntroduction from "./PodcastIntroduction";
function podcastList({ navigation }) {
  const data = [
    {
      date: { day: 2, month: "Th1", year: 2023 },
      title: "Pope Francis esgkldglkng; leads tributes to Benedict XVI",
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

  const [showModal, setShowModal] = useState(true);

  return (
    <View>
      <View>
        <Header isOpacity={showModal}></Header>
      </View>
      <Subscribe numberEpisode={data.length}></Subscribe>
      <Modal animationType={"slide"} transparent={true} visible={showModal}>
        <TouchableWithoutFeedback onPress={() => setShowModal(!showModal)}>
          <View style={styles.modalOverlay}></View>
        </TouchableWithoutFeedback>
        <View style={styles.modal}>
          <PodcastIntroduction></PodcastIntroduction>
        </View>
      </Modal>
      <ScrollView>
        {data.map((e, i) => (
          <ItemPodCast key={i} data={e} navigation={navigation} setShowModal={setShowModal}></ItemPodCast>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
export default podcastList;
