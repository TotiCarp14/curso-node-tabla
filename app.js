const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./configs/yargs');
const colors = require('colors');

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch( err => console.log(err));




