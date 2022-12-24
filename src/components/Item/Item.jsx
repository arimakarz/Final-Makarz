import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemDetailContainer from '../ItemDetailContainer';
import './Item.css';
import '../ItemCount';
import Proptypes from 'prop-types';

const Item = ({element}) => {
    const {titulo, autor, precio, imagen} = element;
    const [oneItem, setOneItem] = useState();

    const callItem = (item) => {
        setOneItem(item);
    }

    return(
        <div>
            <div className='container'>
                <Link to={`/item/${element.id}`}><img src={imagen} className='container__image' alt="No disponible" onClick={(e)=>{callItem(element)}}/></Link>
                <label htmlFor="titulo" className='container__title'>{titulo.toUpperCase()}</label>
                <label htmlFor="autor" className='container__author'>{autor}</label>
                <label htmlFor="precio" className='container__price'>$ {precio.toFixed(2)}</label>
            </div>
            <div className='itemDetailContainer'>
                {oneItem && <div>
                    <ItemDetailContainer item={oneItem}/>
                </div>
                }
            </div>
        </div>
    )
}

Item.proptype = {
    element: Proptypes.element.isRequired
}

export default Item;