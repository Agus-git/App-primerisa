Instructions

To start the server:

$ npm start

To start the desktop app:

$ npm run desktop

To install dependencies (I add this mostly as a reminder to myself):

$ npm install

To package the application as a desktop executable you will need electron-packager installed globally (npm install electron-packager -g) and then run:

$ electron-packager . webots-blockly --platform win32 --arch=ia32 --out=out --overwrite
------------------Consejos-------------------------
*(arreglo.foreach == arreglo.map)
* copiar un objeto
var quieroModificar = this.state.object;
/
var noQuieroModificar = this.state.object.slice();
---------------------------------------------------
------------------------foreach de JS-------------------------------------------------
|arreglo.map((idem (elemento que recorre), index) => { return (idem.position = index)|
|/										     |
|arreglo.map(idem => idem.length)						     |
--------------------------------------------------------------------------------------
------------------------Como entender la funcion flecha----------------------------------------------
// Función tradicional										    |
function (a){											    |
  return a + 100;										    |
}												    |
												    |
// Desglose de la función flecha								    |
												    |
// 1. Elimina la palabra "function" y coloca la flecha entre el argumento y el corchete de apertura.|
(a) => {                                               						    |
  return a + 100;										    |								
}												    |
												    |
// 2. Quita los corchetes del cuerpo y la palabra "return" — el return está implícito.		    |
(a) => a + 100;											    |
												    |
// 3. Suprime los paréntesis de los argumentos							    |
a => a + 100;						     					    |
												    |
// Función tradicional										    |
												    |
function (a, b){										    |
  return a + b + 100;										    |
}												    |
												    |
// Función flecha										    |
(a, b) => a + b + 100;										    |
												    |
// Función tradicional (sin argumentos)								    |
let a = 4;											    |
let b = 2;											    |
function (){ 											    |
  return a + b + 100;										    |
}												    |
												    |
// Función flecha (sin argumentos)								    |
let a = 4;											    |
let b = 2;											    |
() => a + b + 100;          									    |
-----------------------------------------------------------------------------------------------------
