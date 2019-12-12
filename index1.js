var resultadoResta;

function calcularOperaciones(){
    var num1 = parseInt(document.getElementById("numero1").value);
    var num2 = parseInt(document.getElementById("numero2").value);

    resultadoResta = num1 - num2;
    document.getElementById("resultado1").value = resultadoResta;
    // document.getElementById("resultado").value = concatenacion;
}