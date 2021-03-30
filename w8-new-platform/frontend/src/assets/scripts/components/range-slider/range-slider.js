import noUiSlider from 'nouislider'
import wNumb from 'wnumb'

const slider = document.getElementById('input-slider')

if (slider) {
    noUiSlider.create(slider, {
        start: [5000, 15000],
        connect: true,
        tooltips: [
            wNumb({ thousand: ' ', suffix: ' $', decimals: 0 }),
            wNumb({ thousand: ' ', suffix: ' $', decimals: 0 }),
        ],
        range: {
            min: 2000,
            max: 25000,
        },
    })
}
