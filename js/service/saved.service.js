'use strict'

function getSavedMemes() {
    let savedMemes = loadFromLocalStorage('memes')
    // !savedMemes||savedMemes.length===0 ? savedMemes = gSavedMemes : savedMemes
    
    return savedMemes
}

function saveMeme() {
    const savedMemes = getSavedMemes()
    const {selectedImgId} = gMeme

    const savedMemeIdx = savedMemes.findIndex(meme=> meme.selectedImgId===selectedImgId)
    
    savedMemeIdx===-1 ? savedMemes.push(gMeme) : savedMemes[savedMemeIdx] = gMeme
    
    saveToLocalStorage('memes', savedMemes)
}

