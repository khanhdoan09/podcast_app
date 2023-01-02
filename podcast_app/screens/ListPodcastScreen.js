import { ScrollView, Text, View } from "react-native";
import Header from "../components/listPodcast/Header";
import ItemPodCast from "../components/listPodcast/ItemPodcast";
import Subscribe from "../components/listPodcast/Subscribe";
function ListPodcast() {
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

  return (
    <View>
      <Header></Header>
      <Subscribe numberEpisode={data.length}></Subscribe>
      <ScrollView>
        {data.map((e, i) => (
          <ItemPodCast key={i} data={e}></ItemPodCast>
        ))}
      </ScrollView>
    </View>
  );
}

export default ListPodcast;
