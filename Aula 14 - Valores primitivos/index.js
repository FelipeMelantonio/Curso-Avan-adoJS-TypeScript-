let nome = 'Luiz';
console.log(nome);
nome = 'Felipe';
nome[0] = 'R' // dado imutavel
console.log(nome[0], nome);


let a = 'A';
let b = a; //Copia imutavel 
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);

let c = [1, 2, 3];
let d = [...c]; // spread valor Mutavel
let e = d;
console.log(c, d);

c.push(4);
console.log(c, d);

d.pop();
console.log(c, d);
console.log(c);

c.push('Felipe');
console.log(c, d);

// Valores imutavel
const pessoa = {
    nome: 'Felipe',
    sobrenome: 'Melantonio'
};
const pessoa1 = pessoa;
pessoa.nome = 'Pedro';
console.log(pessoa1,pessoa);

// Valores  mutavel
const pessoa2 = {
    nome: 'Felipe',
    sobrenome: 'Melantonio'
};
const pessoa3 = {...pessoa2} // Spread
pessoa2.nome = 'Pedro';
console.log(pessoa2,pessoa3);