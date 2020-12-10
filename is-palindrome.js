function palindrome(phrase) {

    if (phrase === ''){
        alert('Entre com uma frase para verificação')
        return 0
    }

    const toReplace = /[\W_]/g    // identifica os caracteres que não são letras (pontuações e espaços)

    const regularPhrase = phrase.toLowerCase().replace(toReplace, '')

    const reversePhrase = regularPhrase.split('').reverse().join('')

    if(regularPhrase === reversePhrase){
        alert('A frase é palíndroma')
    } else {
        alert('A frase não é palíndroma')
    }

    document.getElementById('phrase').value = ''
    return regularPhrase === reversePhrase
}