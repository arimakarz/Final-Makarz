import { createContext, useReducer, useContext } from "react";
import { CartReducer } from './CartReducer';

export const CartContext = createContext([]);

const initialState = {
    productos: []
}

export const CartContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(CartReducer, initialState);

    function addItem(item){
          const productosActualizados = state.productos.push(item);
          dispatch({ 
            type: 'ADD_ITEM',
            payload: productosActualizados
        });
    };
    
    function removeItem(id){
        const productosActualizados = state.productos.remove(id);
        dispatch({
            type: 'REMOVE_ITEM',
            payload: productosActualizados
        });
    };

    function clear(){
        const productosActualizados = [];
        dispatch({
            type: 'CLEAR',
            payload: productosActualizados
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
        //total: state.total,
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