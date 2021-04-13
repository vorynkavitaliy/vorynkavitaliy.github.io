export const setupPictureBtns = (picturesArray, embla) => {
    picturesArray.forEach((dotNode, i) => {
        $.listener('click', dotNode, () => embla.scrollTo(i), false)
    })
}

export const generatePicturesBtns = (item, pictures, embla) => {
    const template = $.getItem('.carousel-pictures-template', item).innerHTML
    pictures.innerHTML = embla.scrollSnapList().reduce((acc) => acc + template, '')
    const picturesBtn = $.getCollection('.carousel-picture', pictures)
    const picturesItems = $.getCollection('.carousel-slide img', item)

    for (let i = 0; i < picturesBtn.length; i++) {
        const src = picturesItems[i].src
        picturesBtn[i].innerHTML += `<img src="${src}" alt="pic-dot">`
    }
    return [].slice.call(picturesBtn)
}

export const selectPicturesBtn = (picturesArray, embla) => () => {
    const previous = embla.previousScrollSnap()
    const selected = embla.selectedScrollSnap()
    picturesArray[previous].classList.remove('is-selected')
    picturesArray[selected].classList.add('is-selected')
}
