import './Contacto.css';

const Contacto = () =>{
    return (
        <div>
            <h5 className='formContacto__title'>Dejá tu consulta y te contactaremos a la brevedad.</h5>
            <form action="">
                <fieldset className="formContacto">
                    <label htmlFor="nombre">Nombre:</label>
                    <input name="nombre" className="formContacto__text" type="text" placeholder="Nombre"/>
                    <label htmlFor="mail">Email de contacto:</label>
                    <input name="mail" className="formContacto__text" type="text" placeholder="Mail"/>
                    <label htmlFor="consulta">Escribí tu consulta:</label>
                    <textarea name="consulta" className="formContacto__area" placeholder="Consulta"></textarea>
                    <button className='formContacto__button'>Enviar</button>
                </fieldset>
            </form>
        </div>
    )
}

export default Contacto;