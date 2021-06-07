import { reduceEachTrailingCommentRange } from "typescript";
import { FORM_DISPLAY, SET_ALL_USERS, USERS_CHAT } from "./actionTypes";

const formInitialState = {
  formDisplay: "LOGIN_FORM",
};

const usersChatInitialState = {
  chats : []
}

const usersInitialState = {
  allUsers : []
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
      return { ...state, chats : action.payload};
    default:
      return state;
  } 
}

export const usersReducer = (state = usersInitialState, action :any) =>{
  switch (action.type) {
    case SET_ALL_USERS:
      return { ...state, allUsers : action.payload };
    default:
      return state;
  } 
}

