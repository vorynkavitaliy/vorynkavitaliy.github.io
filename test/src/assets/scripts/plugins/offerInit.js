const _offserChange = item => {
    return `<div class="change-item">
        <span class="item-check"></span>
        <h5 class="item-title">Change ${item.id}</h5>
        <span class="item-price">$ ${item.price}</span>
    </div>`
}

export const HTMLOffer = offer => {
    return `<div class="offer-wrap ${offer.active ? 'active' : ''}">
        <div class="offer">
            ${offer.sales ? '<span class="offer__sales"><strong>Hot Price</strong></span>' : ''}

            <h4 class="offer__title">Offer ${offer.id}</h4>

            <span class="offer__price">$&nbsp;<strong>${offer.price}</strong>&nbsp;/mo</span>

            ${offer.save ? `<span class="offer__save">Save ${offer.save}%</span>` : ''}

            <div class="offer__changes">
            
                ${offer.changes.map(_offserChange).join('')}

            </div>

            <button class="offer__btn secondary">Buy now</button>
        </div>
    </div>`
}

