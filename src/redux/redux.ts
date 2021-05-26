import { createStore, combineReducers } from "redux";
import { formReducer } from "./reducer";

const reducer = combineReducers({
  form: formReducer,
});

const store = createStore(reducer);

export default store;
