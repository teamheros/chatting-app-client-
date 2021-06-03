import axios from 'axios';
import { UserSignUp } from '../interfaces/userInterface';
import { FORM_DISPLAY } from '../redux/actionTypes';

export const signUp = async (dispatch:any, user:UserSignUp) =>{

    let res = axios.post("http://localhost:4000/api/users-signup",user);
    console.log('SignUp Response',res);
    dispatch({type:FORM_DISPLAY})
}
