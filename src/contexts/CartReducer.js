export function CartReducer(state, action){

    const {type, payload} = action;
    
    switch(type){
        case "ADD_ITEMS":
            // const updatedList = state.listaProductos;
            // let updatedIndex = -1;
            // if (state.item){
            //     updatedIndex = updatedList.findIndex((element) => element.item.id == payload.item.id);

            //     if (updatedIndex < 0){
            //         if(state.item){
            //             const newItem = {item: payload.item, quantity: payload.quantity}
            //             updatedList.push(newItem);
            //         }
            //     }else{
            //         const updatedCount = state.listaProductos[updatedIndex].quantity + payload.quantity;
            //         const updatedItem = {...state.listaProductos[updatedIndex], quantity: updatedCount}
            //         updatedList.splice(updatedIndex, 1, updatedItem)
            //     }
            // }

            return {
                ...state,
                item: [payload.item],
                quantity: payload.quantity, 
                listaProductos: (payload.listaProductos)
                //listaProductos: state.listaProductos.concat(payload.updatedList)
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
        case "IS_IN_CART":
            
        default:
            return state;
    }
}