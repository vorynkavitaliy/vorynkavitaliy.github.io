const chooseAutoMainTabs = $.getItem('.choose-main-tabs')

if (chooseAutoMainTabs) {
    const CAStabItem = $.getCollection('.tab-item', chooseAutoMainTabs)
    const itemTabsToggler = ['budget', 'body', 'mark']
    for (let i = 0; i < CAStabItem.length; i++) {
        $.removeClass($.getItem('.btn', CAStabItem[i]), 'active')
        $.getItem(`.auto-${itemTabsToggler[i]}`).style.display = 'none'
    }
    $.getItem('.btn', CAStabItem[0]).classList.add('active')
    $.getItem(`.auto-${itemTabsToggler[0]}`).style.display = 'block'

    CAStabItem.forEach((element, id) => {
        $.click(element, function () {
            for (let i = 0; i < CAStabItem.length; i++) {
                const btn = $.getItem('.btn', CAStabItem[i])
                $.getItem(`.auto-${itemTabsToggler[i]}`).style.display = 'none'
                $.removeClass(btn, 'active')
            }
            const btn = $.getItem('.btn', this)
            btn.classList.add('active')
            $.getItem(`.auto-${itemTabsToggler[id]}`).style.display = 'block'
        })
    })
}
