let valor1 = null;
let valor2 = null;
let operador = null;
let result = document.getElementById("result");
let resultCalc = null;

function calculator(){
    valor1 = Number(valor1);
    valor2 = Number(valor2);
    resultCalc = calculadoraWithReturn(valor1, valor2, operador);
    result.innerText = resultCalc;
    //result.innerText = "Hello World!";
}

function calculadoraWithReturn(valor1, valor2, opr){
    let result = "";
    if(opr == "+"){
        result = (valor1 + valor2);
    }else if(opr == "-"){
        result = (valor1 - valor2);
    }else if(opr == "/"){
        if(valor2 <= 0){
            result = "NNaN";
        }else{
            result = (valor1 / valor2);
        }
    }else if(opr == "*"){
        result = (valor1 * valor2);
    }else if(opr == "%"){
        result = (valor1 % valor2);
    }else if(opr == "r"){
        //Implementar raiz quadrada;
    }else{
        result = "NNaN";
    }
    return result;
}

function setValor1(valor){
    if(valor1){
        valor1 = valor1+valor;
    }else{
        valor1 = valor;
    }
    result.innerText = valor1;
}

function setValor2(valor){
    if(valor2){
        valor2 = valor2+valor;
    }else{
        valor2 = valor;
    }
    result.innerText = valor1+ " " +operador+ " " +valor2;
}

function setValor(valor){
    if(!operador){
        setValor1(valor)
    }else{
        setValor2(valor);
    }
}
function setOperador(valor){
    if(resultCalc){
        valor1 = String(resultCalc);
        valor2 = null;
    }
    operador = valor;
    result.innerText = valor1+" "+operador;
}

function setPontoFlutuante(){
    //Implemente adicionar ponto flutuante nos valores
}

function resetCalc(){
    //Implemente a funcao para resetar os valores
}