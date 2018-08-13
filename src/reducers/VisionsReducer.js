export default function VisionsReducer(state = [], action){
    switch(action.type){
        case 'LOAD_VISIONS':
            return {vision: "mision 1"};
        default:
            return state;    
    }
}