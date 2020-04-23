// const argv = require('yargs').argv;

const argv = require('./config/yargs').argv;
const color = require('colors');
const porHacer = require('./por-hacer/por-hacer');

// console.log(argv);

let commando = argv._[0];

switch(commando) {
  case 'crear':
    let tarea = porHacer.crear(argv.descripcion);
    console.log(tarea);
  break;
  
  case 'listar':
    let listado = porHacer.getListado();

    for(let tarea of listado) {
      console.log('==========por hacer ============='.green);
      console.log(tarea.descripcion);
      console.log('Estado: ', tarea.completado);
      console.log('================================='.green);
    }
  break;

  case 'actualizar':
    let actualizado = porHacer.actualizar(argv.descripcion,argv.completado);
    console.log(actualizado);
  break;

  case 'borrar':
    let borrado = porHacer.borrar(argv.descripcion);
    console.log(borrado);

  break;
  default:
    console.log('comando no reconocido');
}