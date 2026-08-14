// Funcoes de retorno podem retornar objetos
// chamamos isso de funcao construtora 
//isso permite criarmos varias instancias 
// do mesmo objeto de forma dinamica

function fabricarcarro(marca, modelo, montadora, motor) {
    return {
        marca: marca,
        modelo: modelo,
        montadora: montadora,
        motor: motor
    }
}
const carro02 = {
    marca: 'bmw',
    modelo: 'x5',
    montadora: 'bmw S.A',
    motor: 'V8 6.0'
}
const camaro = fabricarcarro("camaro", "camaro v387", "chevrolet", "v8")
const bmw = fabricarcarro(carro02.marca, carro02.modelo, carro02.montadora, carro02.motor)
console.log(camaro)
console.log(bmw)