import {LOAD_MESSAGE, CLOSE_MESSAGE} from '../types/typesAction';

export default function UtilsReducer(state = {}, action){
    switch(action.type){
        case LOAD_MESSAGE:
        return { message: action.message };
        case CLOSE_MESSAGE:
        return [];
        default:
            return state;
    }
} 