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
    const { selectedLineIdx, lines } = meme
    let { txt, size, color } = lines[selectedLineIdx]
    
    txt==='' ? txt = 'Insert your text here...' : txt

    gCtx.font = `${size}px Arial`
    gCtx.fillStyle = `${color}`
    gCtx.fillText(txt, 10, 50)
    gCtx.strokeText(txt, 10, 50)
}

function onTextChange(txt) {
    setLineTxt(txt)
    renderMeme()
}

function onChangeTxtColor(txtColor) {
    setLineColor(txtColor)
    renderMeme()
}

function onChangeFontSize(fontSize) {
    setFontSize(fontSize)
    renderMeme()
}

function onDownload(elLink) {
    const dataUrl = gElCanvas.toDataURL()

    elLink.href = dataUrl
}

function showMeme() {
    document.querySelector('.main-editor').classList.remove('hidden')
    document.querySelector('.main-gallery').classList.add('hidden')
    clearEditInputs()
}

function clearEditInputs() {
    document.querySelector('.editor-txt-input').value = ''
}


