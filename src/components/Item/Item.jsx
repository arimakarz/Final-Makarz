import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Item.css';
import '../ItemCount';
import ItemDetailContainer from '../ItemDetailContainer';
import ItemCount from '../ItemCount';
import Proptypes from 'prop-types';

const Item = ({element}) => {
    //const {id, titulo, autor, categoria, precio, imagen} = element;
    const {id, titulo, autor, precio, imagen} = element;
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
                <label htmlFor="precio" className='container__price'>$ {precio}</label>
                <ItemCount className='container__itemCount'></ItemCount>
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