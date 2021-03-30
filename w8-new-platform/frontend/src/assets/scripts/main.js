import './base'
import './functions'
import './components/components'

$.toggler('.auto-body-item', function () {
    this.classList.toggle('active')
})

$.toggler('.checkbox', function () {
    this.classList.toggle('active')
})

$.toggler('.auto-mark-item', function () {
    this.classList.toggle('active')
})

$.toggler('.btn-icon', function () {
    this.classList.toggle('active')
})
