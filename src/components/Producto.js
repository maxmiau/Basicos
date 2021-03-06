import React from 'react';

const Producto = ({ producto, carrito, agregarProducto, productos }) => {
    const { nombre, precio, id } = producto

    // Agregando compra al carrito
    const seleccionProducto = id => {
        const producto = productos.filter(producto => producto.id === id)[0]
        agregarProducto([
            ...carrito,
            producto
        ])
    }

    // Eliminar productos del carrito
    const eliminarProducto = id => {
        const productos = carrito.filter(producto => producto.id !== id)

        // Colar productos en el state
        agregarProducto(productos)
    }

    return ( 
        <div>
            <h2>{nombre}</h2>
            <p>MXN {precio}</p>
            
            {productos
            ?
                (
                    <button
                        type = "button"
                        onClick = { () => seleccionProducto(id) } 
                    >Comprar</button>
                )
            :
                    (
                        <button
                            type = "button"
                            onClick = { () => eliminarProducto(id)}
                        >Eliminar!</button>
                    )
            }
        </div>
    );
}
 
export default Producto;