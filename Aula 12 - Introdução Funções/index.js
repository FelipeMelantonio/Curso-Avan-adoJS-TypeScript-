//function saudacao(nome) {
    //console.log(`Bom dia ${nome}`);
    //return (`Bom dia ${nome}`);
//}

//const variavel = saudacao('Luiz');
//console.log(variavel);

//saudacao('Luiz');
//saudacao('Maria');
//saudacao('Felipe');

function soma(x,y){
    const resultado = x + y ;
    return resultado;
}
const resultado = soma(2,2);
console.log(resultado);
//console.log(soma(2,2));
//console.log(soma(3,2));
//console.log(soma(4,2));

function soma(x,y){
    const resultado = x + y ;
    return resultado;
}
const resultado2 = soma('Luiz',' Otavio');
console.log(resultado2);


function soma(x = 5, y = 4){
    const resultado = x + y ;
    return resultado;
}
const resultado3 = soma(4, 2);
console.log(resultado3);


function soma(x = 5, y = 4){
    const resultado = x + y ;
    return resultado;
}
const resultado4 = soma(6, 10);
console.log(resultado4);

const raiz = function(n){
    return n ** 0.5;

};
let num = raiz(9);
console.log(num);
console.log(raiz(10));
console.log(raiz(4));
console.log(raiz(2));

//Mais moderno
const raiz2 = (n) =>{
    return n ** 0.5;
}
console.log(raiz2(20));

const raiz3 = (n) => n ** 0.5;

console.log(raiz3(20));