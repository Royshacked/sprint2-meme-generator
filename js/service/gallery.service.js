var gImgs = [
    {id: 1, url: 'imgs/1.jpg', keyWords: ['funny', 'cat']}
]

createGallery()

function getImgs() {
    const imgs = gImgs
    return imgs
}

function createImg({id,url,keyWords}) {
    id++
    gImgs.push(
        {
           id: id,
           url: `imgs/${id}.jpg`, 
           keyWords: ['funny', 'dog']
        }
    )
}

function createGallery() {
    for(let i = 0; i < 17 ; i++) {
        createImg(gImgs[i])
    }
}