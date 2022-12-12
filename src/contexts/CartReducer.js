export function CartReducer(state, action){

    const {type, payload} = action;

    switch(type){
        case "ADD_ITEM":
            //return addItem(action.item, state);
            return {
                ...state,
                productos: payload.productos
            }
        case "REMOVE_ITEM":
            //return removeItem(action.item, state);
            return {
                ...state,
                productos: payload.productos
            }
        case "CLEAR":
            //return clear(action, state);
            return {
                ...state,
                productos: payload.productos
            }
        default:
            return state;
    }
}