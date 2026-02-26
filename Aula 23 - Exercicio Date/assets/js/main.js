/*const h1 = document.querySelector(' .container h1');
const data = new Date();

function getDiaSemanaTexto(diaSemana) {
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
function exibirMes(numeroMes) {
    let nomeMes;
    switch (numeroMes) {
        case 0:
            nomeMes = 'Janeiro';
            return nomeMes;
        case 1:
            nomeMes = 'Fevereiro';
            return nomeMes;
        case 2:
            nomeMes = 'Março';
            return nomeMes;
        case 3:
            nomeMes = 'Abril';
            return nomeMes;
        case 4:
            nomeMes = 'Maio';
            return nomeMes;
        case 5:
            nomeMes = 'Junho';
            return nomeMes;
        case 6:
            nomeMes = 'Julho';
            return nomeMes;
        case 7:
            nomeMes = 'Agosto';
            return nomeMes;
        case 8:
            nomeMes = 'Setembro';
            return nomeMes;
        case 9:
            nomeMes = 'Outubro';
            return nomeMes;
        case 10:
            nomeMes = 'Novembro';
            return nomeMes;
        case 11:
            nomeMes = 'Dezembro';
            return nomeMes;

        default:
            nomeMes = '';
            return nomeMes;
    }
}


function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomedia = getDiaSemanaTexto(diaSemana);
    const nomeMes = exibirMes(numeroMes);
    return (
        `${nomedia},  ${data.getDate()} de ${nomeMes}` +
        ` de ${data.getFullYear()}  ${data.getHours()}:${data.getMinutes()}`
    );
}


h1.innerHTML = criaData(data);
*/
const h1 = document.querySelector(' .container h1');
const data = new Date();

function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomedia = getDiaSemanaTexto(diaSemana);
    const nomeMes = exibirMes(numeroMes);
    return (
        `${nomedia},  ${data.getDate()} de ${nomeMes}` +
        ` de ${data.getFullYear()}  ${data.getHours()}:${data.getMinutes()}`
    );
}

function getDiaSemanaTexto(diaSemana) {
  const diaSemanaString = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta' ,'Sabado']
  return diaSemanaString[diaSemana];
}
function exibirMes(numeroMes) {
    const nomeMes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro','Dezembro',];
    return nomeMes[numeroMes]
}

h1.innerHTML = criaData(data);