const favicon = document.querySelectorAll('.favicon[data-icon]')
favicon.forEach((icon) => {
    const iconName = icon.dataset.icon
    const image = document.createElement('img')
    image.src = `./img/icons/${iconName}`
    icon.appendChild(image)
})
