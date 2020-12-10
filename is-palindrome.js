function palindrome(phrase) {

    if (phrase === ''){  // verifica se foi informada alguma string
        alert('Entre com uma frase para verificação')
        return 0
    }

    const toReplace = /[\W_]/g    // identifica os caracteres que não são letras (pontuações e espaços)

    const regularPhrase = phrase.toLowerCase().replace(toReplace, '')  // retira os caracteres que são pontuação e espaços

    const reversePhrase = regularPhrase.split('').reverse().join('') // "espelha" a frase

    if(regularPhrase === reversePhrase){  // verifica se a frase "normal" é igual à espelhada
        alert('A frase é palíndroma')
    } else {
        alert('A frase não é palíndroma')
    }

    document.getElementById('phrase').value = ''  // limpa o campo de texto
    return regularPhrase === reversePhrase // FIM!!!
}