'use strict'

function getSavedMemes() {
    let savedMemes = loadFromLocalStorage('memes')
    if(!savedMemes||savedMemes.length===0) return
    
    return savedMemes
}

function saveMeme() {
    const savedMemes = getSavedMemes()
    const {selectedImgId} = gMeme

    const savedMemeIdx = savedMemes.findIndex(meme=> meme.selectedImgId===selectedImgId)
    
    savedMemeIdx===-1 ? savedMemes.push(gMeme) : savedMemes[savedMemeIdx] = gMeme
    
    saveToLocalStorage('memes', savedMemes)
}

