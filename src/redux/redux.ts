import { createStore, combineReducers } from "redux";
import { formReducer, usersChatsReducer, usersReducer } from "./reducer";

const reducer = combineReducers({
  form: formReducer,
  chat : usersChatsReducer,
  user:usersReducer
});

const store = createStore(reducer);

export default store;
