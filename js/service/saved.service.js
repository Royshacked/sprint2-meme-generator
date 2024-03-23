'use strict'

function getSavedMemes() {
    let savedMemes = loadFromLocalStorage('memes')
    !savedMemes||savedMemes.length===0 ? savedMemes = gSavedMemes : savedMemes
    
    return savedMemes
}

