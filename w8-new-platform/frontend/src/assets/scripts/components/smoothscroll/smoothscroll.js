// const smoothscrollItems = document.querySelectorAll('[data-scroll="smoothscroll"]')
// const appHeader = document.querySelector('.header')
// const appMain = document.querySelector('.app-main')
// if (smoothscrollItems && appHeader && appMain) {
//     let h = appMain.getBoundingClientRect().height - appHeader.getBoundingClientRect().height * 2
//     let scroll = 0
//     const offset = 100

//     document.body.style.height = `${h}px`

//     document.addEventListener('wheel', (event) => {
//         if (event.deltaY < 0) {
//             scroll <= 0 ? (scroll = 0) : (scroll -= offset)
//         } else {
//             scroll >= h ? (scroll = h + 300) : (scroll += offset)
//         }

//         for (const item of smoothscrollItems) {
//             item.style.transform = `translateY(${-scroll}px)`
//         }
//     })
// }
