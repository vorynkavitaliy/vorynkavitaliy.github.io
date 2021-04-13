export const setupDotBtns = (dotsArray, embla) => {
    dotsArray.forEach((dotNode, i) => {
        $.listener('click', dotNode, () => embla.scrollTo(i), false)
    })
}

export const generateDotBtns = (item, dots, embla) => {
    const template = $.getItem('.carousel-dot-template', item).innerHTML
    dots.innerHTML = embla.scrollSnapList().reduce((acc) => acc + template, '')
    return [].slice.call($.getCollection('.carousel-dot', dots))
}

export const selectDotBtn = (dotsArray, embla) => () => {
    const previous = embla.previousScrollSnap()
    const selected = embla.selectedScrollSnap()
    dotsArray[previous].classList.remove('is-selected')
    dotsArray[selected].classList.add('is-selected')
}
