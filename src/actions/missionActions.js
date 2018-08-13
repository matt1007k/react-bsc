import {LOAD_MISSIONS, LOAD_MISSION, CREATE_MISSION, EDIT_MISSION, DELETE_MISSION} from '../types/typesAction';
import {getAll} from '../request/mission';

export function loadMissions(missions){
    return { type: LOAD_MISSIONS, missions}
}

export function loadAll(){
    return (dispatch, getState) => {
        let user = getState().user;
        if(!user) return null;
        getAll(user.token).then( response => {
            dispatch(loadMissions(response))            
        }).catch(error => console.error(error))
    }
}

export function loadMission(mission){
    return { type: LOAD_MISSION, mission }
}

export function createMission(mission){
    return { type: CREATE_MISSION, mission }
}

export function editMission(mission){
    return { type: EDIT_MISSION, mission }
}

export function deleteMission(mission){
    return { type: DELETE_MISSION, mission }
}