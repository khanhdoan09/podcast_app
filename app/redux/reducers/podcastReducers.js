import { PLAY_PODCAST } from "../../constants/actions";
const initialState = {
  imageUrl:
    "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png",
  title: "undefined title",
  channel: "undefined channel",
};

const imagePodcastReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_PODCAST:
      return action.payload;
    default:
      return state;
  }
};

export default imagePodcastReducer;
