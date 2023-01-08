import { SET_IMAGE_CONTINUE_PLAY } from "../../constants/actions";
function setImageContinuePlay(imageUrl) {
  return {
    type: SET_IMAGE_CONTINUE_PLAY,
    payload: imageUrl,
  };
}

export { setImageContinuePlay };
