import { createStore, combineReducers } from "redux";
import imagePodcastReducer from "../reducers/imagePodcastReducers";

const rootReducer = combineReducers({ image: imagePodcastReducer });

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
