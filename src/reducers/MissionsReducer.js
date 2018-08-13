import { LOAD_MISSIONS, CREATE_MISSION } from '../types/typesAction';

export default function MissionsReducer(state = [], action){
    switch(action.type){
        case LOAD_MISSIONS:
        console.log(action.missions)
            return {missions: action.missions[0]};
        case CREATE_MISSION:
            return [action.mission].concat(state);
        default:
            return state;
    }
}