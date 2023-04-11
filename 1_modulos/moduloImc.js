// Módulo IMC
// Terá funcionalidades a respeito do cálculo
// CommonJS


function calcularImc(peso, altura){
    return peso / (altura * altura);
}

function statusImc(imc){
    if(imc <= 18.5){
        return resultadoImc = "abaixo do peso";
    }else if(imc > 18.5 && imc <= 24.9){
        return resultadoImc = "peso ideal, parabéns!";
    }else if(imc > 25 && imc <= 29.9){
        return resultadoImc = "levemente acima do peso";
    }else if(imc > 30 && imc <= 34.9){
        return resultadoImc = "obesidade grau I";
    }else if(imc >35 && imc <= 39.9){
        return resultadoImc = "obesidade grau II (severa)";
    }else if(imc > 40){
        return resultadoImc = "obesidade grau III (mórbida)";
    };
};



// Deste arquivo, irei exportar apenas a função CalcularImc
module.exports = { calcularImc, statusImc };