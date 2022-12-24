export function CartReducer(state, action){

    const {type, payload} = action;
    
    switch(type){
        case "ADD_ITEMS":
            return {
                ...state,
                item: [payload.item],
                quantity: payload.quantity, 
                listaProductos: (payload.listaProductos)
            }
            
        case "REMOVE_ITEM":
            return {
                ...state,
                quantity: payload.quantity,
                listaProductos: (payload.listaProductos)
            }
        case "CLEAR":
            return {
                ...state,
                productos: [payload.listaProductos]
            }            
        default:
            return state;
    }
}