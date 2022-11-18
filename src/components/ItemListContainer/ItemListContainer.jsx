import './ItemListContainer.css';

const ItemListContainer = (props) => {
    return(
        <div>
            <div className='listContainer'>
                <h1 className="listContainer__saludo">{props.greeting}</h1>
                <p className='listContainer__status'>{props.status}</p>
            </div>
        </div>
    )
}

export default ItemListContainer;