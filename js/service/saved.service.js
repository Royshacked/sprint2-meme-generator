'use strict'

function getSavedMemes() {
    let savedMemes = loadFromLocalStorage('memes')
    if(!savedMemes||savedMemes.length===0) return
    
    return savedMemes
}

function removeSaved(idx) {
    const savedMemes = getSavedMemes()
    if(!savedMemes) return
    savedMemes.splice(idx,1)

    saveToLocalStorage('memes', savedMemes)
}

function saveMeme() {
    let savedMemes = getSavedMemes()
    if(!savedMemes) savedMemes = []
    const {selectedImgId} = gMeme

    const savedMemeIdx = savedMemes.findIndex(meme=> meme.selectedImgId===selectedImgId)
    
    savedMemeIdx===-1 ? savedMemes.push(gMeme) : savedMemes[savedMemeIdx] = gMeme
    
    saveToLocalStorage('memes', savedMemes)
}

