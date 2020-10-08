import React from 'react';// Nos permiten crear las interfaces web
import ReactDOM from 'react-dom';//es react enfocado al navegador.

import './index.css';//estilos

import App from './App';//este archivo se encarga de arrancar la aplicacion.
import * as serviceWorker from './serviceWorker'; //estudiar las aplicaciones web progresivas (buscarlo en ingles)
//es una manera de adaptar las apps web y agregar funcionalidad para interactuar en los dispositivos moviles
//tambien sirve apra que la app pueda seguir funcionando aunque no tenga conexion a internet
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
