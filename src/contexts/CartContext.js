import { createContext, useReducer, useState } from "react";
import { CartReducer } from './CartReducer';

export const CartContext = createContext([]);

const initialState = {
    productos: []
}

export const CartContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(CartReducer, initialState);
    const [productosActualizados, setProductosActualizados] = useState([]);

    const addItem = (item) =>{
        debugger
        // const updatedCart = state.productos.concat(item);
        //setProductosActualizados(updatedCart);
        dispatch({ 
            type: 'ADD_ITEM',
            payload: { item: item }
        });
        setProductosActualizados(state.productos);
        //console.log("updatedcart", updatedCart)
        console.log("productos actualizados", productosActualizados)
        console.log("state.productos", state.productos)
    };
    
    function removeItem(id){
        const productosActualizados = state.productos.remove(id);
        dispatch({
            type: 'REMOVE_ITEM',
            payload: { productosActualizados }
        });
    };

    function clear(){
        const productosActualizados = [];
        dispatch({
            type: 'CLEAR',
            payload: { productosActualizados }
        })
    }

    function isInCart(id){
        const productoExistente = false;
        if (state.productos){
            productoExistente = state.productos.find((producto) => producto.id == id);
        }
        return productoExistente;
    }

    return (
    <CartContext.Provider
        value={{
        productos: state.productos,
        addItem,
        removeItem,
        clear,
        isInCart
        }}
    >
        {children}
    </CartContext.Provider>
    );
}