import {AUTH_LOGIN, LOAD_USER ,LOG_OUT} from '../types/typesAction';

export default function AuthReducer(state = {}, action){
    switch(action.type){
        case AUTH_LOGIN:
            return Object.assign({}, state,{token: action.token});
        case LOAD_USER:
            return Object.assign({}, state,{
                name: action.user.data.name,
                id: action.user.data.id,
                email: action.user.data.email
            });
        case LOG_OUT:
            return {};
        default:
            return state;
    }
}