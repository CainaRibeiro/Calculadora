var res         = document.querySelector('.resultado');
var visor       = document.querySelector('.visor');

var operador    = '';

function deletar()
{
    res.innerHTML = '';
    visor.innerHTML = '';
}

//FALTA DAR JEITO NO PONTO A CADA 3 NUMEROS

function addNumero(n)
{
    res.innerHTML += formataValor(Number(n));
    visor.innerHTML += formataValor(Number(n));
    console.log(formataValor(Number(res.innerHTML)))
    
}

function formataValor(valor)
{
    return valor.toLocaleString('pt-br');
}

function somar()
{
    salvarNumero = res.innerHTML;
    res.innerHTML = '';
    operador = '+';
    visor.innerHTML += operador;
}

function multiplicar()
{
    salvarNumero = res.innerHTML;
    res.innerHTML = '';
    operador = '*';
    visor.innerHTML += operador;
}

function dividir()
{
    salvarNumero = res.innerHTML;
    res.innerHTML = '';
    operador = '/';
    visor.innerHTML += operador;
}

function subtrair()
{
    salvarNumero = res.innerHTML;
    res.innerHTML = '';
    operador = '-';
    visor.innerHTML += operador;
}

function calcular()
{
    if(operador == '+')
    {
        res.innerHTML = Number(salvarNumero) + Number(res.innerHTML);
    } 
    else if(operador == '/')
    {
        res.innerHTML = Number(salvarNumero) / Number(res.innerHTML);
    } 
    else if(operador == '-')
    {
        res.innerHTML = Number(salvarNumero) - Number(res.innerHTML);
    } 
    else
    {
        res.innerHTML = Number(salvarNumero) * Number(res.innerHTML);
    }

}