import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { useState, useEffect } from 'react';
import swal from 'sweetalert';
import './ItemCount.css';

const ItemCount = ({onAdd, id}) => {
    const [contador, setContador] = useState(0);
    const [stock, setStock] = useState(id.stock)

    const setStatus = (operation) => {
        if (operation === '-'){
            if (contador > 0){
                setContador(contador - 1);
            }
        }else{
            if (operation === '+'){
                if (contador < stock){
                    setContador(contador + 1);
                }else{
                    swal("¡No puedes agregar más ítems!", `Stock disponible: ${id.stock}`, 'error');
                }
            }else{
                setStock(stock - contador);
                setContador(0);
            }
        }
        
    }

    return (
        <div className='container__itemCount'>
            <div className='container__cantidad'>
                <button className='btnCantidad' onClick={()=> setStatus('-')}>-</button>
                <input id="textCantidad" name="cantidad" type="text" placeholder='0' value={contador} onChange={ e => setContador(e.target.value)}/>
                <button className='btnCantidad' onClick={()=> setStatus('+')}>+</button>
            </div>
            <button id={id} onClick={(e)=>onAdd(id, contador)}>Agregar</button>
        </div>
    )
}

export default ItemCount;