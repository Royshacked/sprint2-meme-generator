'use strict' 

function renderGallery() {
    const imgs = getImgs()

    const strHtml = imgs.map(({id,url}) => `
        <img class="gallery-img-${id}" src="${url}" onclick="onImgSelect(${id})">
    `).join('')

    const elGallery = document.querySelector('.img-container')
    elGallery.innerHTML = strHtml
}

function onImgSelect(imgId) {
    setImg(imgId)
    window.addEventListener('resize', () => renderMeme())
    renderMeme()
    showMeme() 
}

function showGallery() {
    document.querySelector('.main-editor').classList.add('hidden')
    document.querySelector('.main-gallery').classList.remove('hidden')
}

