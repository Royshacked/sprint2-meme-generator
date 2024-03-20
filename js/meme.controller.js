'use strict'

function renderMeme() {
    const meme = getMeme()
    const elImg = new Image()

    elImg.src = `imgs/${meme.selectedImgId}.jpg`

    gElCanvas.height = (elImg.naturalHeight / elImg.naturalWidth) * gElCanvas.width

    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        renderCanvasTxt()
    }
}

function renderCanvasTxt() {
    const meme = getMeme()
    const { selectedLineIdx, lines } = meme

    lines.forEach((line, idx) => {
        let { txt, size, color, x, y } = line

        txt === '' ? txt = 'Insert your text here...' : txt

        gCtx.textBaseline = 'top'
        gCtx.lineWidth = 1
        gCtx.font = `${size}px Arial`
        gCtx.fillStyle = `${color}`
        gCtx.fillText(txt, x, y)
        gCtx.strokeText(txt, x, y)

        if (idx === selectedLineIdx) {
            gCtx.beginPath()
            gCtx.strokeStyle = '#000000'
            gCtx.lineWidth = 2
            gCtx.strokeRect(x-size/2,y-size/2, size+gCtx.measureText(txt).width, 2*size)
            gCtx.fillStyle = "#FDF6F630"
            gCtx.fillRect(x-size/2,y-size/2, size+gCtx.measureText(txt).width, 2*size)
        }
    })
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

function onAddLine() {
    addLine()
    renderMeme()
}

function onRemoveLine() {
    removeLine()
    renderMeme()
}

function onSwitchLine() {
    clearEditInputs()
    switchLine()
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
    document.querySelector('.inp-color').value = '#000000'
}
