//cria tela via js manipulando o Dom

function valoresCalculadora ()
{
 const valores = [9,8,7,6,5,4,3,2,1,0];
 const operacao = [ '+','-','/','*'];
 const operadorDeCalculo = ['.','<','c','=']
 
 const btnValores = valores.map(valor =>`<button class="valor" id='valor${valor}' name='valor${valor}'>${valor}</button>`).join('');

 const btnOperacoes =operacao.map(operacao =>`<button class='operacao' id='operacao${operacao}' name='operacao${operacao}'>${operacao}</button>`).join('');

 const btnOperadoresEspeciais = operadorDeCalculo.map(operador =>`<button class='operacaoControle' id='operacao${operador}' name='operacao${operador}'>${operador}</button>`).join('');
 
 renderizaTela(btnValores,btnOperacoes,btnOperadoresEspeciais);
}

function CriaListas()
{
 const valoresNumericos = document.querySelectorAll(".valor");
 const operacoesConta = document.querySelectorAll(".operacao");
 const ValoresEspeciais = document.querySelectorAll(".operacaoControle");
 addEvento(valoresNumericos,operacoesConta,ValoresEspeciais);
}

function addEvento(valoresNumericos,operacoesConta,ValoresEspeciais)
{
 valoresNumericos.forEach(valor => valor.addEventListener("mousedown",valor =>addValorParaCalculo(valor.target.innerHTML)));
 operacoesConta.forEach(operacao => operacao.addEventListener("mousedown",operacao =>addOperadorParaCalculo(operacao.target.innerHTML)));
 ValoresEspeciais.forEach(especial => especial.addEventListener("mousedown",especial =>addValorEspecialParaCalculo(especial.target.innerHTML)));
}

function renderizaTela (btnValores,btnOperacoes,btnOperadoresEspeciais)
{
 document.getElementById('numeros').innerHTML = btnValores;
 document.getElementById('operacoes').innerHTML = btnOperacoes;
 document.getElementById('operacoesResultado').innerHTML = btnOperadoresEspeciais;
 CriaListas();
}
