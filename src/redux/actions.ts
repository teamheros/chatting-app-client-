import { FORM_DISPLAY, SET_ALL_USERS, USERS_CHAT } from "./actionTypes"

export const selectForm = (form : string) =>{
    return {
        type : FORM_DISPLAY,
        payload : form
    }
}

export const setChatsToDisplay = (chats : string[]) =>{
    return {
        type : USERS_CHAT,
        payload : chats
    }
}

export const setAllUsers = (users : any) =>{
    return {
        type : SET_ALL_USERS,
        payload : users
    }
}