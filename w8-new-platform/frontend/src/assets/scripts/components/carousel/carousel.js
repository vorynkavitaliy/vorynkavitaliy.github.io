import EmblaCarousel from 'embla-carousel'
import { setupPrevNextBtns, disablePrevNextBtns } from './prevAndNextButtons'
import { setupDotBtns, generateDotBtns, selectDotBtn } from './dotButtons'
import { setupPictureBtns, generatePicturesBtns, selectPicturesBtn } from './pictureButtons'

$.listener('DOMContentLoaded', document, () => {
    const carousel = $.getItem('.banner-carousel')
    carousel && EmblaCarousel(carousel)

    const carousels = $.getCollection('.carousel')

    if (carousels) {
        carousels.forEach((item) => {
            const prevBtn = $.getItem('.carousel-arrow.left', item)
            const nextBtn = $.getItem('.carousel-arrow.right', item)
            const dots = $.getItem('.carousel-dots', item)
            const pictures = $.getItem('.carousel-pictures', item)
            const embla = EmblaCarousel(item)

            if (dots) {
                const dotsArray = generateDotBtns(item, dots, embla)
                const setSelectedDotBtn = selectDotBtn(dotsArray, embla)
                setupDotBtns(dotsArray, embla)
                embla.on('select', setSelectedDotBtn)
                embla.on('init', setSelectedDotBtn)
            }

            if (pictures) {
                const picturesArray = generatePicturesBtns(item, pictures, embla)
                const setSelectedPictureBtn = selectPicturesBtn(picturesArray, embla)
                setupPictureBtns(picturesArray, embla)
                embla.on('select', setSelectedPictureBtn)
                embla.on('init', setSelectedPictureBtn)
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
