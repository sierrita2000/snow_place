import { Children } from 'react'
import '../../css/TarjetaProducto.css'

export default function TarjetaProducto ({ nombre, imagenes, precio, stock, children }) {

        return (
            <div className='tarjeta'>
                <section className="tarjeta__producto">
                    <img className='tarjeta__producto__tabla_frente' src={imagenes[0]} alt="parte delantera de la tabla" />
                    <img className='tarjeta__producto__tabla_detras' src={imagenes[1]} alt="parte trasera de la tabla" />
                </section>
                <section className="tarjeta__informacion">
                    <h2>{nombre}</h2>
                    <p className='tarjeta__informacion__info'>{children}</p>
                    <p className='tarjeta__informacion__precio'>{precio}€</p>
                    <button className={ stock > 0 ? (
                        'boton_comprar'
                    ) : (
                        'boton_agotado'
                    )}>
                        { stock > 0 ? (
                            <>COMPRA</>
                        ) : (
                            <>AGOTADO</>
                        )}
                    </button>
                </section>
            </div>
        )
}