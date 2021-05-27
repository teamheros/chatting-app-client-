
import "./App.css";
import MainPage from "./components/mainPage";
import { Provider } from "react-redux";
import store from "./redux/redux";
import Nav from './components/nav/Nav';
import ChatBody from './components/chatBody/ChatBody'

function App() {
  return (
    <Provider store={store}>
      <MainPage />
      <Nav />
    <ChatBody />
    </Provider>
  )
}