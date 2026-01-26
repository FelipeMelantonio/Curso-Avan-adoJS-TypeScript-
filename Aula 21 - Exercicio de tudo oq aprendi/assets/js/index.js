const form = document.querySelector('#formulario');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso invalido', false);
        return;
    }
    if (!altura) {
        setResultado('Altura invalido', false);
        return;
    }
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc.toFixed(2)} (${nivelImc})`
    setResultado(msg, true);
});

function criarP() {
    const p = document.createElement('p');
    return p;

}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criarP();
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    }
    else {
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}

function getImc(peso, altura) {
    const numeroImc = peso / (altura * altura);
    return numeroImc;
}

function getNivelImc(numeroImc) {
    if (numeroImc < 18.5) return 'Abaixo do peso';
    else if (numeroImc >= 18.5 && numeroImc <= 24.9) return 'Peso normal';
    else if (numeroImc >= 25 && numeroImc <= 29.9) return 'Sobrepeso';
    else if (numeroImc >= 30 && numeroImc <= 34.9) return 'Obesidade grau 1';
    else if (numeroImc >= 35 && numeroImc <= 39.9) return 'Obesidade grau 2';
    else return 'Obesidade grau 3';
}

