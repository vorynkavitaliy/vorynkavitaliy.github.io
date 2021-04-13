import noUiSlider from 'nouislider'
import wNumb from 'wnumb'

const slider = document.getElementById('input-slider')
const snapValues = [$.getItem('.range-slider-from'), $.getItem('.range-slider-to')]
let rangeFrom = 5000,
    rangeTo = 15000

if (slider) {
    noUiSlider.create(slider, {
        format: wNumb({
            decimals: 0,
            thousand: '',
            suffix: '',
        }),
        start: [rangeFrom, rangeTo],
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

    slider.noUiSlider.on('update', function (values, handle) {
        snapValues[handle].value = values[handle]
    })
    $.listener('change', snapValues[0], function () {
        slider.noUiSlider.set([this.value, null])
    })

    $.listener('change', snapValues[1], function () {
        slider.noUiSlider.set([null, this.value])
    })
}
