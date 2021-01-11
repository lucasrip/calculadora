//criacao de construtor no escopo global e e adicionar valores para o construtor
function addValorParaCalculo(valor)
{
 this.valoresDeCalculo === undefined?this.valoresDeCalculo=valor:this.valoresDeCalculo+=valor != null?valor:'' ;  
 this.valoresDeCalculo === undefined?this.valoresDeCalculo='':'';   
 if(valor === 'clear')
 {
 this.valoresDeCalculo = '';
 renderizaResultado('','');
 }

renderizaValoresDeCalculo(this.valoresDeCalculo);
return this.valoresDeCalculo;
}

function addOperadorParaCalculo(operador)
{
  const {arrayValores,tamanhoArray }=valoresParaValidacao();
  const operacao = [ '+','-','/','*'];
  let verificaOperador= true;

  operacao.forEach(element => {
    if (element === arrayValores[tamanhoArray])
    {
    return verificaOperador =false;
    }
  })

  validaCampoEspecial(operador,verificaOperador)
}

function addValorEspecialParaCalculo(especial)
 {
  switch(especial)
  {
     case'.':
      validaVirgula('.')
     break;
     
     case '&lt;':
       retiraValor(); 
     break;
      
     case'c':
      addValorParaCalculo('clear');
     break;
     
     case'=':
       calcular();
     break;
  }
 }
