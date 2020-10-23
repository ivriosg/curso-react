import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Producto from "./components/Producto";
import Footer from "./components/Footer";

function App() {
  //crear listado de productos
  //utilizamos useState
  const [productos, guardarProductos] = useState([
    { id: 1, nombre: "Camisa ReactJS", precio: 50 },
    { id: 2, nombre: "Camisa AngularJS", precio: 40 },
    { id: 3, nombre: "Camisa NodeJS", precio: 30 },
    { id: 4, nombre: "Camisa VueJS", precio: 20 },
    { id: 5, nombre: "Camisa PHP", precio: 10 },
  ]);

  //obtener la fecha
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header titulo="Tienda Virtual" />
      <h1>Lista de productos</h1>
      {productos.map((producto) => (
        <Producto 
        key={producto.id} 
        producto={producto} />
      ))}

      <Footer fecha={fecha} />
    </Fragment>
  );
}

export default App;
