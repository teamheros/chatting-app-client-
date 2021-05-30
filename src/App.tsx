import "./App.css";
import MainPage from "./components/mainPage";
import { Provider } from "react-redux";
import store from "./redux/redux";
import Practice from "./practice/practice";

function App() {
  return (
    <Provider store={store}>
      {/* <MainPage /> */}
      <Practice />
    </Provider>
  );
}

export default App;
