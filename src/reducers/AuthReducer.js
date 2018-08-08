import {AUTH_LOGIN, LOG_OUT} from '../types/authType';

export default function AuthReducer(state = {}, action){
    switch(action.type){
        case AUTH_LOGIN:
            return {token: action.token};        
        case LOG_OUT:
            return {};
        default:
            return state;
    }
}