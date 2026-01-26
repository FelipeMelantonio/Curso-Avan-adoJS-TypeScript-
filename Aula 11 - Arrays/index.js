            //012345
const nome = 'Felipe';
            //    0        1        2
const alunos = ['Luiz', 'Maria', 'Joao'];
alunos[0] = 'Edu';
alunos[3] = 'Luiza';
console.log(alunos);
alunos.push('Arozzado') // adiciona no fim 
console.log(alunos);
alunos.unshift('Fabio') // adiciona no começo 
console.log(alunos);
alunos.pop(); // retira o ultimo elemento 
console.log(alunos);
const removeprimeiro = alunos.shift()// remove primeiro elemento
console.log(removeprimeiro);
console.log(alunos);

console.log(alunos.length);

//console.log(alunos[0])
// alunos[alunos.length] = 'Arroz' add
// alunos[alunos.length] = 'Feijao' add 
// alunos[alunos.length] = 'Batata' add