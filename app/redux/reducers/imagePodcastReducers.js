import { SET_IMAGE_CONTINUE_PLAY } from "../../constants/actions";
const initialState = {
  imageUrl:
    "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png",
};

const imagePodcastReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IMAGE_CONTINUE_PLAY:
      return { imageUrl: action.payload };
    default:
      return state;
  }
};

export default imagePodcastReducer;
