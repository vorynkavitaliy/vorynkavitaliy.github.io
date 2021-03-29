document.addEventListener('DOMContentLoaded', () => {
    const searchInputs = document.querySelectorAll('[data-name="search"]')
    searchInputs.forEach((input) => {
        input.addEventListener('blur', function () {
            this.value.trim() === '' ? this.classList.remove('focus') : this.classList.add('focus')
        })
    })
})
