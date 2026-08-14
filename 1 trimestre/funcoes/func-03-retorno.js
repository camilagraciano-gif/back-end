// funcoes de retorno exigem o termo 'return'
// permitem tornar disponiveis os dados processados 

// podemos armazernar as funçoes de retorno 
// as variaveis, funçoes, arrays, etc. 

function meuSalario (salario){
   const contaLuz =145.0
   const aluguel = 1350.0
   const restosalario = salario - (contaLuz+aluguel)
//console.log (restosalario) // não serve p/ usuario 
 return `o resto do seu salario é R$ ${restosalario.toFixed(2).replace(".",",") }`

}
 const resto = meuSalario(15000.0)
 console.log (resto)