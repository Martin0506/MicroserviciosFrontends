import React from "react";
import ReactDOM from "react-dom";

const CatalogoProductos = React.lazy(() => import("catalogoProductos/Catalogo"));
const CarritoCompras = React.lazy(() => import("carritoCompras/Carrito"));

const App = () => (
  <React.Suspense fallback="Cargando...">
    <h1>Micro Frontends con Webpack Module Federation</h1>
    <CatalogoProductos />
    <CarritoCompras />
  </React.Suspense>
);

ReactDOM.render(<App />, document.getElementById("root"));
