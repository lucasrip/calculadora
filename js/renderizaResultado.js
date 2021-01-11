//mostra os resultado do calculo na tela depois das validacoes serem feitas
let nmConta =document.querySelector(".nmConta");

function renderizaValoresDeCalculo(valorCalculo=0)
{
  valorCalculo.length <20?nmConta.innerHTML =''+ valorCalculo:addValorParaCalculo('clear');
}

function renderizaResultado(resultado=0,conta=0)
{
  conta >= '0'?conta=conta+" =":'';
  document.querySelector(".conta").innerHTML = `${conta} ${resultado}`;
  nmConta.innerHTML = resultado;
}