import React, { Fragment, useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Producto from './components/Producto'


function App() {
  // Crear listado de productos
  const [productos, guardarProductos] = useState([
    {id: 1, nombre: 'camisa perrona', precio:40},
    {id: 2, nombre: 'pantalon perron', precio:66},
    {id: 3, nombre: 'Tenis perrones', precio:777},
    {id: 4, nombre: 'calcetines apache', precio:1},
  ])

  // State para carrito de compras
  const [ carrito, agregarProducto ] = useState([])

  // Obtener fecha
  const fecha = new Date().getFullYear()

  return (
    <Fragment>
      <Header 
        titulo = 'Tienda virtual perrona'
      />

      <h1>Lista de productos</h1>
      {productos.map(producto => (
        <Producto 
          key = {producto.id}
          producto = {producto}
          carrito = {carrito}
          productos = {productos}
          agregarProducto = {agregarProducto}
        />
      ))}

      <Footer 
        fecha={fecha}
      />
    </Fragment>
    
  );
}

export default App;
