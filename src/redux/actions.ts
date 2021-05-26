import { FORM_DISPLAY } from "./actionTypes"

export const selectForm = (form : string) =>{
    return {
        type : FORM_DISPLAY,
        payload : form
    }
}