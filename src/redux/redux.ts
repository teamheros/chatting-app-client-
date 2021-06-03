import { createStore, combineReducers } from "redux";
import { formReducer, usersChatsReducer } from "./reducer";

const reducer = combineReducers({
  form: formReducer,
  chat : usersChatsReducer
});

const store = createStore(reducer);

export default store;
