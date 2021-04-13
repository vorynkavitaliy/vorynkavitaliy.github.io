export const tabsChangeMethod = (tabsController, tabsCollections) => {
    const tabsBtns = $.getCollection('.tab-item', tabsController)
    const tabsBlocks = $.getCollection('.tab-collections-item', tabsCollections)
    for (let i = 0; i < tabsBtns.length; i++) {
        if ($.getItem('.btn', tabsBtns[i])) {
            $.removeClass($.getItem('.btn', tabsBtns[i]), 'active')
        } else {
            $.removeClass(tabsBtns[i], 'active')
        }
        tabsBlocks[i].style.display = 'none'
    }
    if ($.getItem('.btn', tabsBtns[0])) {
        $.getItem('.btn', tabsBtns[0]).classList.add('active')
    } else {
        tabsBtns[0].classList.add('active')
    }

    tabsBlocks[0].style.display = 'block'

    tabsBtns.forEach((element, id) => {
        $.click(element, function () {
            for (let i = 0; i < tabsBtns.length; i++) {
                const btn = $.getItem('.btn', tabsBtns[i]) || tabsBtns[i]
                tabsBlocks[i].style.display = 'none'
                $.removeClass(btn, 'active')
            }
            const btn = $.getItem('.btn', this) || this
            btn.classList.add('active')
            tabsBlocks[id].style.display = 'block'
        })
    })
}

const tabsControllers = $.getCollection('.tabs-controllers')

if (tabsControllers) {
    tabsControllers.forEach((tabsGroup) => {
        const collectionsId = tabsGroup.dataset.id
        const collection = $.getItem(`[data-item="${collectionsId}"]`)
        collection && tabsChangeMethod(tabsGroup, collection)
    })
}
