import './App.css'
import TarjetaProducto from './components/TarjetaProducto/TarjetaProducto'
import { Productos } from './bbdd/Productos'

function App() {

  return (
    <>
      <h1 className='tablas_titulo'>NUESTRAS TABLAS</h1>
      <div className='tablas'>
        {Object.values(Productos).map((producto) => 
          (
            <TarjetaProducto nombre={producto.nombre} imagenes={producto.imagenes} precio={producto.precio} stock={producto.stock}>
              {producto.descripcion}
            </TarjetaProducto>
          )
        )}
      </div>
      <img className='pino1' src="../public/pino.png"/>
      <img className='pino2' src="../public/pino.png"/>
    </>
  )
}

export default App
