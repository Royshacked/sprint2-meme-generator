'use strict' 

function renderGallery(filterBy) {
    const imgs = getImgs(filterBy)

    const strHtml = imgs.map(({id,url}) => `
        <img class="gallery-img-${id}" src="${url}" onclick="onImgSelect(${id})">
    `).join('')

    const elGallery = document.querySelector('.img-container')
    elGallery.innerHTML = strHtml
}

function onImgSelect(imgId) {
    setImg(imgId)
    showMeme()
    resizeCanvas()
    renderMeme()
}

function renderKeyWords() {
    const keyWordsMap = getKeyWordsMap()
    const keyWords = document.querySelectorAll('li')
    
    keyWords.forEach(keyWord => {
        keyWord.style.fontSize = keyWordsMap[keyWord.innerText] + 'px'
    })
}

function onClickKeyWord(filterBy) {
    if(filterBy) updateKeyWords(filterBy)
    renderGallery(filterBy)
    renderKeyWords(filterBy)
}

function onSearchChange(filterBy) {
    renderGallery(filterBy)
    renderKeyWords(filterBy)
}

function showGallery() {
    document.querySelector('.main-editor').classList.add('hidden')
    document.querySelector('.main-saved').classList.add('hidden')
    document.querySelector('.main-gallery').classList.remove('hidden')
}
