import { reduceEachTrailingCommentRange } from "typescript";
import { FORM_DISPLAY } from "./actionTypes";

const initialState = {
  formDisplay: "LOGIN_FORM",
};

export const formReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FORM_DISPLAY:
      return { ...state, formDisplay: action.payload };
    default:
      return state;
  }
};


