function calcularIMC() {
    const alturaInput = document.querySelector('.input-altura').value;
    const pesoInput = document.querySelector('.input-peso').value;

    const altura = parseFloat(alturaInput.replace(',', '.'));
    const peso = parseFloat(pesoInput.replace(',', '.'));

    if (!altura || !peso) {
        alert("Por favor, preencha o peso e a altura corretamente.");
        return;
    }

    const formula = (p, a) => p / (a * a);
    const imc = formula(peso, altura);

   
    redirecionarUsuario(imc);
}

function redirecionarUsuario(imc) {
    if (imc < 18.5) {
        window.location.href = "abaixo.html";
    } else if (imc < 25) { 
        window.location.href = "normal.html";
    } else if (imc < 30) {
        window.location.href = "sobrepeso.html";
    } else if (imc < 35) {
        window.location.href = "obesidade1.html";
    } else if (imc < 40) {
        window.location.href = "obesidade2.html";
    } else {
        window.location.href = "morbida.html";
    }
}

