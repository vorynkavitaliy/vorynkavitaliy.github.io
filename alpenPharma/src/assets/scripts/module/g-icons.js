const gIcons = document.querySelectorAll('.g-icon')

gIcons.forEach(item => {
    const icon = item.dataset.icon
    const iconPath = './src/assets/images/icons/icon-'
    const image = `<img src='${iconPath+icon}.svg'/>`
    item.innerHTML = image

})


