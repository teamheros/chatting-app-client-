import { reduceEachTrailingCommentRange } from "typescript";
import { FORM_DISPLAY, USERS_CHAT } from "./actionTypes";

const formInitialState = {
  formDisplay: "LOGIN_FORM",
};

const usersChatInitialState = {
  chats : []
}

export const formReducer = (state = formInitialState, action: any) => {
  switch (action.type) {
    case FORM_DISPLAY:
      return { ...state, formDisplay: action.payload };
    default:
      return state;
  }
};

export const usersChatsReducer = (state = usersChatInitialState, action :any) =>{
  switch (action.type) {
    case USERS_CHAT:
      return { ...state, chats : action.payload };
    default:
      return state;
  } 
}


