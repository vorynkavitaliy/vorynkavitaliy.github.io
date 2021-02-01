import {HTMLOffer} from './plugins/offerInit'
import {toggleElements} from './plugins/elementToggle'
import {icons} from './iconsSVG'
import {social} from './iconsSVG'
import './plugins/paginations'

// let offers = [
//     {id: 1, price: 56.99, changes: [{id: 1, price: 99.99}, {id: 2, price: 79.99}]},
//     {id: 2, active: true, sales: true, price: 86.99, save: 35, changes: [{id: 1, price: 99.99}, {id: 2, price: 79.99}, {id: 2, price: 79.99}]},
//     {id: 3, sales: true, price: 106.99, save: 15, changes: [{id: 1, price: 99.99}, {id: 2, price: 79.99}]},
//     {id: 4, sales: true, price: 106.99, save: 15, changes: [{id: 1, price: 99.99}, {id: 2, price: 79.99}]},
//     {id: 5, price: 106.99, save: 15, changes: [{id: 1, price: 99.99}, {id: 2, price: 79.99}]},
    
// ]
// let tabNumbers = [];
// const tabsNumber = () => {
//     const width = window.innerWidth
//     if(width >= 320 && width < 768){
//         for(let i = 1; i <= Math.ceil(offers.length/1); i++){tabNumbers.push(i)}
//     }
//     else if(width >= 768 && width < 1200){
//         for(let i = 1; i <= Math.ceil(offers.length/2); i++){tabNumbers.push(i)}
//     }
//     else if(width >= 1200){
//         for(let i = 1; i <= Math.ceil(offers.length/3); i++){tabNumbers.push(i)}
//     }
// }

// const checkItems = ['Egestas erat imperdiet sed', 'Rhoncus dolor purus non', 'Interdum varius sit amet', 'Egestas quis ipsum', 'Nunc congue nisi vitae', 'A scelerisque purus semper ', 'Eget mi proin sed libero', 'Posuere urna nec tincidunt praesent', 'Sed nisi lacus sed viverra']

// const toggleClass = (element, className) => {
//     const useToggler = query => {
//         query.addEventListener('click', function() {
//             this.classList.toggle(className)
//         })
//     }
//     element.length > 0 ? element.forEach(item => useToggler(item)) : useToggler(element) 
// }

// function render() {
//     tabsNumber()
//     const tabHtml = tabNumbers.map((_, i) => `<li class="tab" data-id="${i}">Tab ${i+1}</li>`).join('')
//     const offerHtml = offers.map(offer => HTMLOffer(offer)).join('')
//     const iconsHtml = icons.map(icon => `<img class="icon" src="${icon.pic}" alt="${icon.name}">`).join('')
//     const checkedHtml = checkItems.map(checked => `<span class="checkbox checked"><i></i> ${checked}</span>`).join('')
//     const socialHtml = social.map(soc => `<li class="${soc.name}"><a href="${soc.url}"><img src="${soc.icon}" alt="${soc.name}"></a></li>`).join('')
//     document.querySelector('.main__tabs').innerHTML = tabHtml
//     document.querySelector('.offers').innerHTML = offerHtml
//     document.querySelector('.icons__wrapper').innerHTML = iconsHtml
//     document.querySelector('.main__checkboxes').innerHTML = checkedHtml
//     document.querySelector('.navigation-media ul').innerHTML = socialHtml
// }


// document.addEventListener('DOMContentLoaded', () => {
//     render()
//     // change language
//     const langContainers = document.querySelectorAll('.lang');

//     langContainers.forEach(langBox => {
//         const langs = langBox.querySelectorAll('li')
//         const chooseLang = document.querySelectorAll('.choose-lang')

//         for (const item of langs) {
//             let lang = item.dataset.lang
            
//             if(item.dataset.pos === 'header') item.textContent = lang.slice(0, 3)
//             else item.textContent = lang

//             item.addEventListener('click', () => {
//                 for (let i = 0; i < chooseLang.length; i++) {
//                     chooseLang[i].dataset.lang = lang
//                     if(chooseLang[i].dataset.pos === 'header')chooseLang[i].textContent = lang.slice(0, 3)
//                     else chooseLang[i].textContent = lang
//                 }
//             })
//         }
//     })


//     //toggle navbar
//     const burger = document.getElementById('burger');
//     const navbar = document.getElementById('navbar');

//     burger.addEventListener('click', function(){
//         this.classList.toggle('active')
//         navbar.classList.toggle('open')

//     })
//     navbar.addEventListener('click', e => {
//         if(e.target.classList.contains('navbar')){
//             burger.classList.remove('active')
//             navbar.classList.remove('open')
//         }
//     })
    

//     //tabs element
//     const mainTams = document.querySelector('.main__tabs')
//     const tabEl = mainTams.querySelectorAll('.tab')
//     const scrollWrap = document.querySelector('.scroll-wrap')
//     const offerItems = scrollWrap.querySelectorAll('.offer-wrap')
  
//     tabEl[0].classList.add('active')
//     tabEl.forEach(tab => {
//         tab.addEventListener('click', function(){
//             const itemId = +this.dataset.id
//             for (const iterator of offerItems) iterator.style.top = `-${itemId*105.5}%`
//         })
//     })

//     toggleElements('.tab', 'active', '.main__tabs')
//     //toggle Elements
    
//     toggleElements('.offer-wrap', 'active')
//     toggleElements('.change-item', 'checked', '.offer-wrap')

//     //checkboxes
//     const checkbox = document.querySelectorAll('.checkbox')
//     toggleClass(checkbox, 'checked')

// })