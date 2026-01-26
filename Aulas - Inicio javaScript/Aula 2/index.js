const nome = 'Luiz otavio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc;
let anoNascimento;

imc = peso / (altura * altura)
anoNascimento = 2025 - idade;
console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos ' + ' ,pesa ' + peso + ' kg ' )
console.log(`tem ${altura} de altura e seu imc é de ${imc}`)// Melhor jeito com crase
console.log(nome, 'nasceu em', anoNascimento)