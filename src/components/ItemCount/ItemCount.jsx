import { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({id}) => {
    const [contador, setContador] = useState(0);
    const [stock, setStock] = useState(5);

    const setStatus = (operation) => {
        if (operation === '-'){
            if (contador > 0){
                setContador(contador - 1);
            }
        }else{
            if (operation === '+'){
                if (contador < stock){
                    setContador(contador + 1);
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
            <button id="btnAddOn" onClick={()=> setStatus('fin')}>Agregar</button>
        </div>
    )
}

export default ItemCount;