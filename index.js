var resultadoSuma;

function calcularOperaciones(){
    var num1 = parseInt(document.getElementById("numero1").value);
    var num2 = parseInt(document.getElementById("numero2").value);

    resultadoSuma = num1 + num2;
    document.getElementById("resultado1").innerHTML = resultadoSuma;

}