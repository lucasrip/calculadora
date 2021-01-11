//funcoes de cada operador especial ['.','<','c','=']

function valoresParaValidacao()
{
  const stringCalculo = addValorParaCalculo();
  const arrayValores =  Array(...stringCalculo);
  const tamanhoArray = arrayValores !== undefined ?arrayValores.length-1:'';

  return {stringCalculo,arrayValores,tamanhoArray};
}

 function validaVirgula(especial)
 {
  const {arrayValores}=valoresParaValidacao();  
  let verificaOperadorEspecial= true;

  arrayValores.forEach(element => {
    element === '.'?verificaOperadorEspecial =false:'';
    element === '+'|'-'|'/'|'*'?verificaOperadorEspecial =true:'';  
  })

  validaCampoEspecial(especial,verificaOperadorEspecial)
 }

 function validaCampoEspecial(valorEspecial,verificaOperador)
 {
  const {arrayValores,tamanhoArray }=valoresParaValidacao();

  if( valorEspecial !== arrayValores[tamanhoArray] && arrayValores[tamanhoArray] != undefined && arrayValores.length>0 && verificaOperador === true)
   {
     arrayValores[tamanhoArray] === '.'? valorEspecial = '0'+valorEspecial:''; 
     arrayValores[tamanhoArray] !=='+'|'-'|'/'|'*'?addValorParaCalculo(valorEspecial):'';   
  }
 }

 function retiraValor()
 {
   const {stringCalculo} = valoresParaValidacao();
  const indexDoValor =parseInt(stringCalculo.length-1);
  const valorAlterado =stringCalculo.slice(0,indexDoValor);
  
  addValorParaCalculo('clear');
  addValorParaCalculo(valorAlterado);
  
  return valorAlterado;
 }

 function calcular()
 {
   const {stringCalculo,tamanhoArray,arrayValores}= valoresParaValidacao();
   const valoresCalculo = arrayValores[tamanhoArray] === '+'|'-'|'*'|'/'?retiraValor():stringCalculo;
   
  
   const resultado =eval(valoresCalculo);
   const conta =valoresCalculo;
   
   addValorParaCalculo('clear')
   addValorParaCalculo(resultado)
   renderizaResultado(resultado,conta)      
   
  }
