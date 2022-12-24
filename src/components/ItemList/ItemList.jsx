import './ItemList.css'; 
import Item from '../Item';

const ItemList = ({listas}) => {
    return (
        <div>
            <div>
            {listas
            ? <div className='itemList'>
                {
                    listas.map((oneItem)=>{
                        return(
                            <Item key={oneItem.id} element={oneItem}></Item>
                        )
                    })
                }
                </div>
                : <p className='itemList__advert'>Cargando...</p>}
            </div>
        </div>
    )
}

export default ItemList;