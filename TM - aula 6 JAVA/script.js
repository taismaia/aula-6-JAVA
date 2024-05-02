// const lista_de_numeros = []
// const lista_do_dobro = []

// for(let i = 0; i<10; i++){
//     const num_digitado = Number(prompt("Digite um número: "))
//     lista_de_numeros.push(num_digitado)
//     lista_do_dobro.push(num_digitado * 2)
// }

// console.log(lista_de_numeros)
// console.log(lista_do_dobro)



// const lista_numeros = []
// const lista_pares_somados = []

// for(let i = 0; i<8; i++){
//     const numero_digitado = Number(prompt("Digite um número: "))
//     lista_numeros.push(numero_digitado)
// }


// for(let numero_atual of lista_numeros){
//     if(numero_atual % 2 ===0){
//         soma += numero_atual
//     }
//     const soma = lista_numeros + lista_pares_somados
// }
// console.log(`A soma dos números pares deu ${soma}`)


// const lista_num = []
// const lista_dos_multiplos = []

// for(let i = 0; i<6; i++){
//     const numero_digitado = Number(prompt("Digite um número: "))
//     lista_num.push(numero_digitado)
// }

// for(let numero_atual of lista_num){
//     if(numero_atual % 3 === 0 && numero_atual % 5 === 0){
//         lista_dos_multiplos.push(numero_atual)
//     }
// }
// console.log(lista_num)
// console.log(lista_dos_multiplos)


// FUNÇÕES 1 //

// function cumprimentar(nome_da_pessoa){
//     console.log(`Olá, bem vindo ${nome_da_pessoa}`)
// }

// cumprimentar("Taís")
// cumprimentar("Caio")
// cumprimentar("Letícia")
// cumprimentar("Euri")


// function somar(primeiro_numero, segundo_numero){
//     const soma = primeiro_numero + segundo_numero
//     return soma 
// }

// const primeira_soma = somar(8,9)
// const segunda_soma = somar(8,9)
// const terceira_soma = somar(8,9)

// console.log(primeira_soma)
// console.log(segunda_soma)
// console.log(terceira_soma)

// console.log(`A soma dos números deu: ${somar(5,8)}`)
// alert(somar(10,15))


// if(terceira_soma > 20){
//     console.log("maior")
// }else{
//     console.log("menor")
// }


// function contarVogais(palavra){
//     const vogais = "aeiouáàâãéêíõóôú"
//     let contador_de_vogais = 0
//     for(let letra_da_vez of palavra){
//         if(vogais.includes(letra_da_vez)){
//             contador_de_vogais ++
//         }
//     }
//     return contador_de_vogais
// }

// console.log(contarVogais("beterraba"))
// console.log(contarVogais("melancia"))
// console.log(contarVogais("paralelepipedo"))



// function quadrado(numero){
//     return numero ** 2
// }
// console.log(quadrado(5))
// console.log(quadrado(10))
// console.log(quadrado(34))

// const numero = Number(prompt("Digite um número: "))
// console.log(quadrado(numero))



function calcularCirculo(raio){
    const area = Math.PI * raio ** 2
    const circunferencia = 2 * Math.PI * raio 

    return [area,circunferencia]
}
const raio = Number(prompt("Digite o raio do círculo: "))
const circulo1 = calcularCirculo(raio)
console.log(`Área do círculo ${circulo1[0]}`)
console.log(`Circunferência do círculo ${circulo1[1]}`)