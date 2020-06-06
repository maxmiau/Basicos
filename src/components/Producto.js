import React from 'react';

const Producto = ({ producto, carrito, agregarProducto, productos }) => {
    const { nombre, precio, id } = producto

    // Agregando compra al carrito
    const seleccionProducto = id => {
        const producto = productos.filter(producto => producto.id === id)[0]
        console.log(producto)
    }

    return ( 
        <div>
            <h2>{nombre}</h2>
            <p>MXN {precio}</p>
            <button
                type = "button"
                onClick = { () => seleccionProducto(id) } 
            >Comprar</button>
        </div>
    );
}
 
export default Producto;