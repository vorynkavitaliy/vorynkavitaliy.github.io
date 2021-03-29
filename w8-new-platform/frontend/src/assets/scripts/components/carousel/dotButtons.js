export const setupDotBtns = (dotsArray, embla) => {
    dotsArray.forEach((dotNode, i) => {
        dotNode.addEventListener('click', () => embla.scrollTo(i), false)
    })
}

export const generateDotBtns = (item, dots, embla) => {
    const template = item.querySelector('.carousel-dot-template').innerHTML
    dots.innerHTML = embla.scrollSnapList().reduce((acc) => acc + template, '')
    return [].slice.call(dots.querySelectorAll('.carousel-dot'))
}

export const selectDotBtn = (dotsArray, embla) => () => {
    const previous = embla.previousScrollSnap()
    const selected = embla.selectedScrollSnap()
    dotsArray[previous].classList.remove('is-selected')
    dotsArray[selected].classList.add('is-selected')
}
