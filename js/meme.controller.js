'use strict'

function renderMeme() {
    const meme = getMeme()
    const elImg = new Image()
    
    elImg.src = `imgs/${meme.selectedImgId}.jpg`

    gElCanvas.height = (elImg.naturalHeight / elImg.naturalWidth) * gElCanvas.width

    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        renderCanvasTxt(meme)
    }
}

function renderCanvasTxt(meme) {
    const {txt,size,color} = meme.lines[0]
    
    gCtx.font = `${size}px Arial`
    gCtx.fillText(txt, 10, 50)
}

function onTextChange(elTxtInput) {
    const txt = elTxtInput.value
    setLineTxt(txt)
    renderMeme()
}

function showMeme() {
    document.querySelector('.main-editor').classList.remove('hidden')
    document.querySelector('.main-gallery').classList.add('hidden')
}


