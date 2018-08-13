import {AUTH_LOGIN, LOAD_USER,LOG_OUT, LOAD_MESSAGE, CLOSE_MESSAGE} from '../types/typesAction';

export function login(token){
    return { type: AUTH_LOGIN, token };
}

export function loadUser(user){
    return { type: LOAD_USER, user };
}

export function logout(){
    return { type: LOG_OUT };
}

export function loadMessage(message){
    return { type: LOAD_MESSAGE, message };
}

export function closeMessage(){
    return { type: CLOSE_MESSAGE };
}