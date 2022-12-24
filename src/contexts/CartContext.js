import { createContext, useReducer } from "react";
import { CartReducer } from './CartReducer';

export const CartContext = createContext(null);

const initialState = {
    item: {},
    quantity: 0,
    listaProductos: []
}

export const CartContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(CartReducer, initialState);

    function addItem(product, count){
        const updatedList = [...state.listaProductos];
        console.log(updatedList)
        let updatedIndex = isInCart(product);
        
        if (updatedIndex < 0){
                const newItem = {item: product, quantity: count}
                updatedList.push(newItem);
                console.log(updatedList)
        }else{
            const updatedCount = updatedList[updatedIndex].quantity + count;
            const updatedItem = updatedList[updatedIndex];
            updatedItem.quantity = updatedCount;
            updatedList.splice(updatedIndex, 1, updatedItem)
        }

        dispatch({ 
            type: 'ADD_ITEMS',
            payload: { item: product, quantity: count, listaProductos: updatedList }
        });
        console.log(state.listaProductos)
    };
    
    function removeItem(id){
        const deletedIndex = state.listaProductos.findIndex((element) => element.item.id == id);
        const count = state.listaProductos[deletedIndex].quantity;
        const updatedList = state.listaProductos;
        updatedList.splice(deletedIndex, 1);
        dispatch({
            type: 'REMOVE_ITEM',
            payload: { quantity: count, listaProductos: updatedList }
        });
    };

    function clearCart(){
        const updatedList = state.listaProductos;
        updatedList.length = 0;
        dispatch({
            type: 'CLEAR',
            payload: { listaProductos: updatedList }
        }, 500)
    }

    function isInCart(item){
        let productoExistente = -1;
        if (state.listaProductos){
            productoExistente = state.listaProductos.findIndex((element) => element.item.id == item.id);
        }
        return productoExistente;
    }

    function itemsInCart(){
        return state.listaProductos.reduce((acum, element) => acum + element.quantity, 0);
    }

    return (
    <CartContext.Provider
        value={{
            quantity: state.quantity,
            item: state.item,
            listaProductos: state.listaProductos,
            addItem,
            removeItem,
            clearCart,
            isInCart,
            itemsInCart
        }}
    >
        {children}
    </CartContext.Provider>
    );
}