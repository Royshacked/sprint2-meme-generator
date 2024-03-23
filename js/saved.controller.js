'use strict'

function renderSavedMemes() {
    const savedMemes = getSavedMemes()
    
    createCanvasEl(savedMemes)
    renderSaved(savedMemes)
}

function createCanvasEl(savedMemes) {
    const strHtml = savedMemes.map(savedMeme => `
        <canvas class="saved-canvas-${savedMeme.selectedImgId}" height="320" width="320" onclick="onSavedImgSelect(${savedMeme.selectedImgId})"></canvas>
        `
    ).join('')

    const elSaved = document.querySelector('.main-saved')
    elSaved.innerHTML = strHtml
}

function renderSaved(savedMemes) {
    savedMemes.forEach((savedMeme) => {
        let elSavedCanvas = document.querySelector(`.saved-canvas-${savedMeme.selectedImgId}`)
        let savedCtx = elSavedCanvas.getContext('2d')

        const elImg = document.querySelector(`.gallery-img-${savedMeme.selectedImgId}`)
        drawImgOnCanvas(elSavedCanvas,savedCtx,elImg)
        renderCanvasTxt(savedMeme,savedCtx)
    })
}

function onSavedImgSelect(imgId) {
    setSavedImg(imgId)
    renderMeme()
    showMeme()
}

function showSaved() {
    document.querySelector('.main-editor').classList.add('hidden')
    document.querySelector('.main-saved').classList.remove('hidden')
    document.querySelector('.main-gallery').classList.add('hidden')
    renderSavedMemes()
}