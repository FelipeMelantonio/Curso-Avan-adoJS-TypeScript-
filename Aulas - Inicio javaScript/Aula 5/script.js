let varA = 'A'; // B 
let varB = 'B'; // C 
let varC = 'C'; // A

const temp = varA;
varA = varB; // aponte o a para o b = a -> b    a virou b
varB = varC; // aponte o b para o c = b -> c  b virou c 
varC = temp;

console.log(varA, varB, varC);

let vara = 'A'; // B 
let varb = 'B'; // C 
let varc = 'C'; // A
[vara, varb, varc] = [varb, varc, vara]

console.log(varA, varB, varC);