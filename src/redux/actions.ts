import { FORM_DISPLAY, USERS_CHAT } from "./actionTypes"

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