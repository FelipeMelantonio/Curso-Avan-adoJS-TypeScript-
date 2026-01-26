//const array = [1,2,3];
//array.push(4);
//console.log(array);
//array[0] = 'Felipe';
//console.log(array); 


const nome02 = 'Maria';
const sobrenome02 = 'Oliveira';
const idade02 = 50;

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
}; 

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

const pessoa2 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,
    fala(){
        console.log(`${this.nome} ${this.sobrenome} tem ${this.idade} anos`);
    },
    soma5idade(){
        this.idade += 5;
        console.log(`A idade mais 5 é ${this.idade} `);
    },
    incrementaidade(){
        this.idade++;
        console.log(`A minha idade incrementada é ${this.idade}`)
    }
    
}; 
pessoa2.fala();
pessoa2.soma5idade();
pessoa2.incrementaidade();
pessoa2.fala();


    


function criapessoa(nome,sobrenome,idade){
    return {
        nome,sobrenome,idade
        //nome:nome,
        //sobrenome:sobrenome,
        //idade:idade
    };
}

const pessoa = criapessoa('Felipe','Melantonio',15);
const pessoa6 = criapessoa('Arthur','Melantonio',15);
const pessoa3 = criapessoa('Felipe','Melantonio',15);
const pessoa4 = criapessoa('Felipe','Melantonio',15);
console.log(pessoa);
console.log(pessoa.nome , pessoa6.nome);