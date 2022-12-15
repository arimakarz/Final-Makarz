export function CartReducer(state, action){

    const {type, payload} = action;

    switch(type){
        case "ADD_ITEM":
            return {
                ...state,
                productos: [payload.item]
            }
        case "REMOVE_ITEM":
            return {
                ...state,
                productos: [payload.item]
            }
        case "CLEAR":
            return {
                ...state,
                productos: [payload.item]
            }
        default:
            return state;
    }
}