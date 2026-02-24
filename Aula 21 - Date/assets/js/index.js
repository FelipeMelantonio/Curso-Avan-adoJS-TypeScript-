/*
const data = new Date();
const diaSemana = data.getDay();

let diaSemanaString;


if (diaSemana == 0) {
    diaSemanaString = 'Domingo';
}
else if(diaSemana == 1){
    diaSemanaString = 'Segunda feira';
}
else if (diaSemana == 2) {
    diaSemanaString = 'Terca feira';
}
else if (diaSemana == 3) {
    diaSemanaString = 'Quarta feira';
}
else if (diaSemana == 4) {
    diaSemanaString = 'Quinta feira';
}
else if (diaSemana == 5) {
    diaSemanaString = 'Sexta feira';
}
else if (diaSemana == 6) {
    diaSemanaString = 'Sabado';
}

console.log(diaSemanaString);
console.log(typeof diaSemana);
console.log(typeof diaSemanaString);
*/



/*
const data = new Date();
const diaSemana = data.getDay();

let diaSemanaString;

switch (diaSemana) {
    case 0:
        diaSemanaString = 'Domingo';
        break;
    case 1:
        diaSemanaString = 'Segunda';
        break;
    case 2:
        diaSemanaString = 'Terça';
        break;
    case 3:
        diaSemanaString = 'Quarta';
        break;
    case 4:
        diaSemanaString = 'Quinta';
        break;
    case 5:
        diaSemanaString = 'Sexta';
        break;
    case 6:
        diaSemanaString = 'Sabado';
        break;
    default:
        diaSemanaString = '';
}
console.log(diaSemanaString);

*/



function getDiaSemanaString(diaSemana) {
    let diaSemanaString;
    switch (diaSemana) {
        case 0:
            diaSemanaString = 'Domingo';
            return diaSemanaString;
        case 1:
            diaSemanaString = 'Segunda';
            return diaSemanaString;
        case 2:
            diaSemanaString = 'Terça';
            return diaSemanaString;
        case 3:
            diaSemanaString = 'Quarta';
            return diaSemanaString;
        case 4:
            diaSemanaString = 'Quinta';
            return diaSemanaString;
        case 5:
            diaSemanaString = 'Sexta';
            return diaSemanaString;
        case 6:
            diaSemanaString = 'Sabado';
            break;
        default:
            diaSemanaString = '';
            return diaSemanaString;
    }

}
const data = new Date();
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaString(diaSemana);

console.log(diaSemanaTexto);
