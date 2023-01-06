const { crearArchivoTabla } = require('./helpers/multiplicar')
const argv = require('./config/yargs');
var colors = require('colors');

// console.clear();

// const [ , ,arg3] = process.argv;
// const [, base = 5] = arg3.split("=");


crearArchivoTabla(argv.b, argv.l, argv.h)
.then(x => console.log(colors.bgCyan(x)))
.then(err => console.error(colors.red(err)));

