const dropdown = $.getItem('.dropdown-block')

if (dropdown) {
    let trigger = false
    const currentLink = $.getItem('.current-link', dropdown),
        dropdownList = $.getItem('.dropdown-list', dropdown),
        dropdownItem = $.getCollection('.dropdown-item', dropdownList)

    $.click(currentLink, function () {
        trigger = !trigger

        if (trigger) {
            this.classList.add('active')
            const h = dropdownItem[0].getBoundingClientRect().height
            dropdownList.style.height = `${h * dropdownItem.length}px`
        } else {
            this.classList.remove('active')
            dropdownList.removeAttribute('style')
        }
    })
}
