document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn')
    buttons.forEach((button) => {
        const ripples = document.createElement('span')
        ripples.classList.add('ripples')

        const ripplePosition = (event, ripple) => {
            let x = event.clientX - event.target.getBoundingClientRect().left
            let y = event.clientY - event.target.getBoundingClientRect().top
            ripple.style.left = `${x}px`
            ripple.style.top = `${y}px`
        }

        button.addEventListener('click', function (e) {
            ripplePosition(e, ripples)
            this.appendChild(ripples)
            setTimeout(() => ripples.remove(), 300)
        })
    })
})
