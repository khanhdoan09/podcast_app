import { PLAY_PODCAST } from "../../constants/actions";
function playPodcast(podcast) {
  return {
    type: PLAY_PODCAST,
    payload: podcast,
  };
}

export { playPodcast };
