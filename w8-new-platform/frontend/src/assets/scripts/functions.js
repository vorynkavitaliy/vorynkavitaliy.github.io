$.getCollection = (element = String, parent = null) => {
    if (parent) {
        return parent.querySelectorAll(element)
    }
    return document.querySelectorAll(element)
}

$.getItem = (element, parent = null) => {
    if (parent) {
        return parent.querySelector(element)
    }
    return document.querySelector(element)
}

$.click = (element, callback) => {
    return element.addEventListener('click', callback)
}

$.removeClass = (element, className) => {
    element.classList.remove(className)
}

$.toggler = (element = String, callback = Function) => {
    const array = $.getCollection(element)

    if (array.length < 2) {
        const item = $.getItem(element)
        $.click(item, callback)
    } else {
        array.forEach((el) => {
            $.click(el, callback)
        })
    }
}
