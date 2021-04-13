const changeViewButton = $.getCollection('.change-view')

if (changeViewButton) {
    changeViewButton.forEach((button) => {
        $.click(button, function () {
            for (let i = 0; i < changeViewButton.length; i++)
                changeViewButton[i].classList.remove('active')
            this.classList.add('active')
            const id = this.dataset.id
            const viewsCollection = $.getCollection('.views-type')
            for (const view of viewsCollection) {
                view.classList.contains(id)
                    ? (view.style.display = 'block')
                    : (view.style.display = 'none')
            }
        })
    })
}
