import EmblaCarousel from 'embla-carousel'
import { setupPrevNextBtns, disablePrevNextBtns } from './prevAndNextButtons'
import { setupDotBtns, generateDotBtns, selectDotBtn } from './dotButtons'

$.listener('DOMContentLoaded', document, () => {
    const carousel = document.querySelector('.banner-carousel')
    carousel && EmblaCarousel(carousel)

    const carousels = $.getCollection('.carousel')

    if (carousels) {
        carousels.forEach((item) => {
            const prevBtn = item.querySelector('.carousel-arrow.left')
            const nextBtn = item.querySelector('.carousel-arrow.right')
            const dots = item.querySelector('.carousel-dots')
            const embla = EmblaCarousel(item)

            if (dots) {
                const dotsArray = generateDotBtns(item, dots, embla)
                const setSelectedDotBtn = selectDotBtn(dotsArray, embla)
                setupDotBtns(dotsArray, embla)
                embla.on('select', setSelectedDotBtn)
                embla.on('init', setSelectedDotBtn)
            }

            if ((prevBtn, nextBtn)) {
                const disablePrevAndNextBtns = disablePrevNextBtns(prevBtn, nextBtn, embla)
                setupPrevNextBtns(prevBtn, nextBtn, embla)
                embla.on('select', disablePrevAndNextBtns)
                embla.on('init', disablePrevAndNextBtns)
            }
        })
    }
})
