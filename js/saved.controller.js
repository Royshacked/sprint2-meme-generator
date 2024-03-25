'use strict'

function renderSavedMemes() {
    const savedMemes = getSavedMemes()

    createCanvasEl(savedMemes)
    renderSaved(savedMemes)
}

function createCanvasEl(savedMemes) {
    if (!savedMemes) {
        var strHtml = ''
    }
    else {
        strHtml = savedMemes.map((savedMeme, idx) => `
        <div class="saved-container">
            <canvas class="saved saved-canvas-${savedMeme.selectedImgId}" height="320" width="320" onclick="onSavedImgSelect(${savedMeme.selectedImgId})"></canvas>
            <button class="exit-saved" onclick="onRemoveSaved(${idx})" title="remove meme">X</button>
        </div>
    `
        ).join('')
    }
    const elSaved = document.querySelector('.main-saved')
    elSaved.innerHTML = strHtml
}

function renderSaved(savedMemes) {
    if (!savedMemes) return

    savedMemes.forEach((savedMeme) => {
        let elSavedCanvas = document.querySelector(`.saved-canvas-${savedMeme.selectedImgId}`)
        let savedCtx = elSavedCanvas.getContext('2d')

        const elImg = document.querySelector(`.gallery-img-${savedMeme.selectedImgId}`)
        drawImgOnCanvas(elSavedCanvas, savedCtx, elImg)
        renderCanvasTxt(savedMeme, savedCtx)
    })
}

function onSavedImgSelect(imgId) {
    setSavedImg(imgId)
    showMeme()
    resizeCanvas()
    renderMeme()
}

function onRemoveSaved(idx) {
    removeSaved(idx)
    renderSavedMemes()
}

function showSaved() {
    document.querySelector('.main-editor').classList.add('hidden')
    document.querySelector('.main-saved').classList.remove('hidden')
    document.querySelector('.main-gallery').classList.add('hidden')
    renderSavedMemes()
}