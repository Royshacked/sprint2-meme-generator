'use strict'

function getRandomIntInc(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
   }

function getRandomWords() {
    const words = ['funny','comics', 'dogs', 'drinks' , 'books']
    const index = getRandomIntInc(0, 4)

    const keyWords = [words[index]]
    words.splice(index,1)

    keyWords.push(words[getRandomIntInc(0, 3)])

    return keyWords
}