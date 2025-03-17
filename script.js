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
        result = Math.sqrt(valor1);
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

//---------------------PONTO FLUTUANTE--------------------//

// Função para adicionar um ponto flutuante
function setPontoFlutuante() {
    if (operador === null) { // Se não houver operador, estamos lidando com valor1
        if (valor1 === null) {
            valor1 = "0."; // Inicia com 0. se valor1 estiver vazio
        } else if (!valor1.includes(".")) {
            valor1 += "."; // Adiciona o ponto a valor1 se não existir
        }
    } else { // Se já houver um operador, estamos lidando com valor2
        if (valor2 === null) {
            valor2 = "0."; // Inicia com 0. se valor2 estiver vazio
        } else if (!valor2.includes(".")) {
            valor2 += "."; // Adiciona o ponto a valor2 se não existir
        }
    }
    atualizarDisplay(); // Atualiza o display após adicionar o ponto
}

//----------------FUNÇÃO PARA ZERAR CALCULADORA------------------//

// Função para limparr a calculadora
function resetCalc() {
    valor1 = null; // Limpa o primeiro número
    valor2 = null; // Limpa o segundo número
    operador = null; // Limpa o operador
    result.textContent = "0"; // Reseta o display para 0
}

// Função para atualizar o display
function atualizarDisplay() {
    if (valor1 === null) {
        result.textContent = "0"; // Exibe 0 se não houver valor
    } else {
        result.textContent = valor1 + (operador ? " " + operador + " " + (valor2 || "") : "");
    }
}