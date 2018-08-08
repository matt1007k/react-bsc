import {AUTH_LOGIN, LOG_OUT} from '../types/authType';

export function login(token){
    return { type: AUTH_LOGIN, token };
}

export function logout(){
    return { type: LOG_OUT };
}