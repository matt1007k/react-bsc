import {LOAD_MISSIONS, LOAD_MISSION, CREATE_MISSION, EDIT_MISSION, DELETE_MISSION, ERRORS_API} from '../types/typesAction';
import {getAll, show, update, create, destroy} from '../request/mission';

//action de loadMissions()
export function loadMissions(payload){
    return { type: LOAD_MISSIONS, payload}
}

export function loadErrors(errors){
    return { type: ERRORS_API, errors }
}

export function loadAll(){
    return (dispatch, getState) => {
        let user = getState().user;
        if(!user) return null;
        getAll(user.token).then( response => {
            dispatch(loadMissions(response))            
        }).catch(error => {
            dispatch(loadErrors(error))
        })
    }
}

export function loadMission(mission){
    return { type: LOAD_MISSION, payload: mission }
}

export function showMission(id){
    return (dispatch, getState) => {
        const user = getState().user;
        if (!user) return null;
        show(id, user.token).then(response => {
            dispatch(loadMission(response))
        }).catch(error => console.log(error))
    }
}



export function createMission(mission){
    return { type: CREATE_MISSION, payload: [mission] }
}

export function addMission(data){    
    return (dispatch, getState) => {
        let user = getState().user;
        if(!user) return null;
        create(data, user.token).then(response => {
          dispatch(createMission(response))
        }).catch(error => {
            dispatch(loadErrors(error))
        })
    }
}

export function updateMission(mission){
    return { type: EDIT_MISSION, payload: mission }
}

export function EditMission(id, data){
    return (dispatch, getState) => {
        const user = getState().user;
        if (!user) return null;
        update(id, data, user.token).then(response => {
            dispatch(updateMission(response))
        }).catch(error => {
            console.log(error);
            dispatch(loadErrors(error))
        })
    }
}

export function deleteMission(id){
    return { type: DELETE_MISSION, payload: id }
}

export function destroyMission(id){
    return (dispatch, getState) => {
        const user = getState().user;
        if (!user) return null;
        destroy(id, user.token).then(response => {
            dispatch(deleteMission(response));
        }).catch(error => {
            dispatch(loadErrors(error))
        })
    }
}