import * as request from '../request/mission'

export function getAllVisions(visions){
    return { type: 'LOAD_VISIONS', visions }
}

export function getAll(){
    return (dispatch, getState) => {
        const user = getState().user;
        if (!user) return null;
        request.getAll(user.token)
        .then(response => {
            dispatch(getAllVisions(response.data))
        })
    }
}
 