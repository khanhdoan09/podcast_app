import { createStore, combineReducers } from "redux";
import podcastReducer from "../reducers/podcastReducers";

const rootReducer = combineReducers({ podcast: podcastReducer });

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
