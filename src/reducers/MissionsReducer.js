import { LOAD_MISSIONS, CREATE_MISSION, ERRORS_API, LOAD_MISSION, DELETE_MISSION, EDIT_MISSION } from '../types/typesAction';

export default function MissionsReducer(state = {missions: []}, action){
    switch(action.type){
        case LOAD_MISSIONS:
            return {...state, missions: [...action.payload]};
        case CREATE_MISSION:
            console.log(...state.missions)
            return {missions: [...state.missions, ...action.payload]};
        case LOAD_MISSION:
            return { missions: [action.payload] };
        case DELETE_MISSION:
            // Creamos una copia del estado de mission actual
            const currentMissionToDelete = [...state.missions]
            //Determinamos que mission se va a eliminar por el id
            const indexToDelete = currentMissionToDelete.findIndex(
                function(mission){
                    return mission.id === action.payload.id
                }
            );
            // usamos slice para eliminar la mission de nuestro estado de missions por el indexToDelete
            return {missions: [...currentMissionToDelete.slice(0, indexToDelete),
            ...currentMissionToDelete.slice(indexToDelete + 1)]}
        case EDIT_MISSION:
            console.log(action.payload)
            const currentMissionToUpdate = [...state.missions]
            const indexToUpdate = currentMissionToUpdate.findIndex(
                function(mission){
                    return mission.id === action.payload.id;
                }
            )
            //Creo un nuevo objeto de mission y les paso el nuevo valor que se esta actualizando
            const newMissionToUpdate = {
                ...currentMissionToUpdate[indexToUpdate],
                content: action.payload.content
            }
            
            console.log("Edit new", newMissionToUpdate)
            // Elimino el antiguo objecto por el id y actualizo el objeto con los nuevos valores
            return {missions: [...currentMissionToUpdate.slice(0, indexToUpdate), newMissionToUpdate,
            ...currentMissionToUpdate.slice(indexToUpdate + 1)]}
        case ERRORS_API:
            return { errors: action.errors };
        default:
            return state;
    }
}