function exercicio14() {

    alert("Numero maior que 10")
    let numero = prompt("Digite um valor: ")
    if (numero > 10) {
        alert("O número " + numero + " é maior que 10.")
    } else {
        alert("O número " + numero + " é menor que 10.")
    }
}

function exercicio15() {

    alert("Ver se o numero é positivo ou negativo")
    let numero = prompt("Digite um valor: ")
    if (numero >= 0) {
        alert("O valor " + numero + " é positivo.")

    } else {
        alert("O valor " + numero + " é negativo.")
    }
}

function exercicio16() {
    alert("Calcular Valor maçã")

    let quantidade = parseFloat(prompt("Digite a quantidade de maçãs compradas"));
    let total;
    if (quantidade > 11) {

        total = quantidade * 1

    } else {

        total = quantidade * 1.30

    }

    alert("O valor total das maças é de : " + total.toFixed(2))

}



function exercicio13() {

    alert("Calcular a media final de um aluno")
    let numero1 = parseInt(prompt("Digite a 1ºNota: "))
    let numero2 = parseInt(prompt("Digite a 2ºNota: "))
    let numero3 = parseInt(prompt("Digite a 3ºNota: "))
    let media = (numero1 * 2 + numero2 * 3 + numero3 * 5) / 10
    alert("Sua media final é de : " + media.toFixed(2))
}

function exercicio17() {

    alert("Calcular a media do aluno e ver se ele reprovou ou não")
    let numero1 = parseInt(prompt("Digite a 1ºNota: "))
    let numero2 = parseInt(prompt("Digite a 2ºNota: "))

    let media = (numero1 + numero2) / 2

    if (media > 6) {

        alert("Sua média foi " + media.toFixed(2) + " e você foi aprovado por que a média é maior que 6")

    } else {

        alert("Sua média foi " + media.toFixed(2) + " e você foi reprovado por que a média é menor que 6")
    }

}

function exercicio18() {

    alert("Conferir se pode votar ou não")

    let anoatual = parseInt(prompt("digite o ano atual"))
    let anonascimento = parseInt(prompt("digite o ano que você nasceu"))
    let votar = anoatual - anonascimento

    if (votar < 18) {


        alert("Você tem " + votar + "anos e não pode votar")

    } else {

        alert("Você tem " + votar + " anos e pode votar")

    }


}

function exercicio27() {

    alert("Conferir se numero é negativo, positivo ou neutro")

    let numero = parseInt(prompt("Digite um numero"))

    if (numero == 0) {

        alert("O numero " + numero + " é neutro")

    }

    else if (numero > 0) {


        alert("O numero " + numero + " é positivo")

    }

    else {

        alert("O numero " + numero + " é negativo")

    }

}

function exercicio28() {

    alert("Ver o maior valor dentre 3 numeros")

    let numero1 = parseInt(prompt("Digite um numero"))
    let numero2 = parseInt(prompt("Digite um numero"))
    let numero3 = parseInt(prompt("Digite um numero"))

    if ((numero1) > (numero2) && (numero3)) {

        alert("O maior numero é " + numero1)

    }

    else if ((numero2) > (numero1) && (numero3)) {

        alert("O maior numero é " + numero2)

    }

    else {

        alert("O maior numero é " + numero3)

    }


}

function exercicio29() {


    alert(`Ler 3 valores  e escrever a soma dos 2 maiores.`)

    let valor1 = parseInt(prompt("Digite o primeiro valo"))
    let valor2 = parseInt(prompt("Digite o segundo valor"))
    let valor3 = parseInt(prompt("Digite o teceiro valor"))
    let resultado

    if (valor1 & valor2 > valor3) {

        resultado = valor1 + valor2

        alert("A soma dos maiores valores é de " + resultado)

    } else if (valor2 & valor3 > valor1) {


        resultado = valor2 + valor1

        alert("A soma dos maiores valores é de " + resultado)


    } else {

      resultado = valor1 + valor3
      alert("A soma dos maiores valores é de " + resultado)


  }






}




function exemploSwitchCase() {

    alert("Ver os meses do ano")

    let numero = parseInt(prompt("Digite um número :"))
    switch (numero) {
        case 1:
            alert("Janeiro")
            break;
        case 2:
            alert("Fevereiro")
            break;
        case 3:
            alert("Março")
            break;
        case 4:
            alert("Abril")
            break;
        case 5:
            alert("Maio")
            break;
        case 6:
            alert("Junho")
            break;
        case 7:
            alert("Julho")
            break;
        case 8:
            alert("Agosto")
            break;
        case 9:
            alert("Setembro")
            break;
        case 10:
            alert("Outubro")
            break;
        case 11:
            alert("Novembro")
            break;
        case 11:
            alert("Dezembro")
            break;
        default:
            alert("Não há mês correspondente")
            break;
    }
}



function soma() {

    alert("efetuar a soma de dois valores")
    let numero1 = parseInt(prompt("Digite um valor: "))
    let numero2 = parseInt(prompt("Digite outro valor: "))
    let soma = numero1 + numero2
    alert("O resultado da soma é :" + soma)
}

function subtracao() {

    alert("efetuar a subtração de dois valores")
    let numero1 = parseInt(prompt("Digite um valor: "))
    let numero2 = parseInt(prompt("Digite outro valor: "))
    let sub = numero1 - numero2
    alert("O resultado da subtração é :" + sub)
}

function multiplicacao() {

    alert("efetuar a Multiplicação de dois valores")
    let numero1 = parseInt(prompt("Digite um valor: "))
    let numero2 = parseInt(prompt("Digite outro valor: "))
    let mul = numero1 * numero2
    alert("O resultado da multiplicação é de:" + mul)
}

function divisao() {

    alert("efetuar a divisão de dois valores")
    let numero1 = parseFloat(prompt("Digite um valor: "))
    let numero2 = parseFloat(prompt("Digite outro valor: "))
    let div = numero1 / numero2
    alert("O resultado da multiplicação é de:" + div)
}




