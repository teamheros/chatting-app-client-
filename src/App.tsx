import "./App.css";
import MainPage from "./components/mainPage";
import { Provider } from "react-redux";
import store from "./redux/redux";

function App() {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}

export default App;
