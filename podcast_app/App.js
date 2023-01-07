import Navigator from "./routes/Navigator";
import { Provider } from "react-redux";
import configureStore from "./redux/store/configureStore";

export default function App() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <Navigator></Navigator>
    </Provider>
  );
}
