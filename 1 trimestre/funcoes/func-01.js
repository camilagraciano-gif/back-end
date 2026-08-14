// funções podem ou não receber parâmetros
// são blocos reaproveitáveis

function dizOla(){
    console.log ("Olá")
}
function dizOlaPessoa(nome){
    if(typeof nome !== "string"){
        console.error("Por Favor, digite um valor de texto!")
    }else{
        console.log (nome + ", diz Olá")
    }
    
}
dizOla()
dizOlaPessoa("Pedro")
dizOlaPessoa("maria")
dizOlaPessoa(10)