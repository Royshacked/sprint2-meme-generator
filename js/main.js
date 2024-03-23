'use strict'

let gElCanvas
let gCtx

function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')

    // resizeCanvas()
    
    // window.addEventListener('resize', () => resizeCanvas())

    renderGallery()
    renderKeyWords()
    showGallery()
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')

    gElCanvas.width = elContainer.clientWidth
}

function toggleMenu() {
    document.body.classList.toggle('menu-open')
}