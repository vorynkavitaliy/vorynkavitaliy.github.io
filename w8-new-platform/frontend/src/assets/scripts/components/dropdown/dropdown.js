const dropdownsList = $.getCollection('.dropdown-block')

if (dropdownsList) {
    dropdownsList.forEach((dropdown) => {
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
    })
}

const parametrsDropdown = $.getCollection('.parametrs-dropdown')

if (parametrsDropdown) {
    parametrsDropdown.forEach((dropdown) => {
        let toggleFlag = false
        const dropdownTitle = $.getItem('.parametrs-dropdown-title', dropdown)
        const dropdownList = $.getItem('.parametrs-dropdown-list', dropdown)
        const titleHeight = dropdownTitle.getBoundingClientRect().height
        const listHeight = dropdownList.getBoundingClientRect().height

        dropdown.style.height = `${titleHeight}px`
        $.click(dropdownTitle, function () {
            toggleFlag = !toggleFlag
            if (toggleFlag) {
                this.parentElement.classList.add('active')
                dropdown.style.height = `${titleHeight * 2 + listHeight}px`
            } else {
                this.parentElement.classList.remove('active')
                dropdown.style.height = `${titleHeight}px`
            }
        })
    })
}
