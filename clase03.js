// requerir un módulo nativo. Ejemplo;

const path = require ("path");

//console.log (path);


// requerir un módulo de un tercero. Como no es nativo, necesita ser instalado previamente. Para ello usamos npm (Node Package Manager)

//primero en la TERMINAL;  npm init. Luego npm install + el nombre del módulo que querramos. Recién ahí se puede ejecutar dicho módulo.

const pokemon = require ("pokemon")
console.log (pokemon.all());


// resumen: 
//1. Crear un carpeta para tu proyecto
//2. Abrir la carpeta con Visual Studio Code
//3. Abrir un terminal dentro de esa carpeta de tu proyecto y hacer: npm init -y  (esto creará el package.json)
//4. Crear un archivo de javascript: ejemplo.js y aquí escrbiras el código
//5. Si quieres usar modulos de terceros: npm i nombreModulo o npm install nombreModulo
//6. Hacer require('nombreModulo') en tu archivo ejemplo.js y ya puedes usarlo 




