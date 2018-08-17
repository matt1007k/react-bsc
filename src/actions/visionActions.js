

export function getAll(){
    return { 
        type: 'GET_VISIONS',
        payload: [{
            "id":1,
            "content":"missions 1"
        },
        {
            "id":2,
            "content":"Other missions"
        }]
    }
}

export function postMision(){
    return { 
        type: 'POST_VISION', 
        payload: [{
            "id":3,
            "content":"missions nueva"
        }] 
    }
}

export function updateMision(){
    return {
        type: 'UPDATE_VISION',
        payload: {
            "id": 2,
            "content":"missions nueva update"
        } 
    }
}

export function deleteMision(){
    return {
        type: 'DELETE_VISION',
        payload: {"id": 1}
    }
}

 