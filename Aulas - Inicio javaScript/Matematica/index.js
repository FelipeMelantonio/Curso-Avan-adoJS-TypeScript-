const numero = Number(prompt('Digite um Numero'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Raiz Quadrada: ${Math.sqrt(numero)} </p>`;
texto.innerHTML += `<p>${numero} é inteiro ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>É nan: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Estou arredonando para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Estou arredonando para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas Casas Decimais: ${numero.toFixed(2)}</p>`;



