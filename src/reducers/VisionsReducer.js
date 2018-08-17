export default function VisionsReducer(state = {visions: []}, action){
    switch(action.type){
        case 'GET_VISIONS':
            return {...state, visions:[...action.payload]};
        case 'POST_VISION':
            return {visions: [...state.visions, ...action.payload]}
        case 'UPDATE_VISION':
            const currentVisionToUpdate = [...state.visions]
            const indexToUpdate = currentVisionToUpdate.findIndex(
                function(vision){
                    return vision.id === action.payload.id;
                }
            )

            const newVisionUpdated = {
                ...currentVisionToUpdate[indexToUpdate],
                content: action.payload.content
            }

            return {visions: [...currentVisionToUpdate.slice(0, indexToUpdate), newVisionUpdated,
            ...currentVisionToUpdate.slice(indexToUpdate + 1)]}
        case 'DELETE_VISION':
            const currentVisionToDelete = [...state.visions]
            const indexToDelete = currentVisionToDelete.findIndex(
                function(vision){
                    return vision.id === action.payload.id;
                }
            )
            
            return {visions: [...currentVisionToDelete.slice(0, indexToDelete), 
               ...currentVisionToDelete.slice(indexToDelete + 1)]}
        default:
            return state;    
    }
}