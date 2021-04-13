const openModalBtn = $.getCollection('[data-open="open-modal"]')
const modalWindow = $.getItem('.app-modal')

if ((openModalBtn, modalWindow)) {
    openModalBtn.forEach((btn) => {
        $.click(btn, () => {
            modalWindow.style.display = 'block'
            const animateWindow = setTimeout(() => {
                modalWindow.classList.add('show')
                $.getItem('.page').style.filter = 'blur(5px)'
                clearTimeout(animateWindow)
            }, 100)
        })
    })

    $.click(modalWindow, function (e) {
        const self = e.target

        if (self.classList.contains('app-modal') || self.classList.contains('close-modal')) {
            modalWindow.classList.remove('show')
            $.getItem('.page').removeAttribute('style')
            const animateWindow = setTimeout(() => {
                modalWindow.style.display = 'none'
                clearTimeout(animateWindow)
            }, 100)
        }
    })
}
