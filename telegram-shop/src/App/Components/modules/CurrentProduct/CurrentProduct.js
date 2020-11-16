import React from 'react'
import styles from './product.module.sass'
import Price from './../../molecules/Price/Price';
const CurrentProduct = ({products, initialState, filterByID}) => {

    const productItem = filterByID(products, initialState.ides.product, 'id')[0]

    console.log(productItem);

    const setHTML = setTimeout(() => {
        document.querySelector(`.${styles.description}`).innerHTML = productItem.description
        clearTimeout(setHTML)
    }, 0)

    return (
        <article>
            <div className={styles.picture}>
                <img src={productItem.img[0]} alt={productItem.name}/>
            </div>
            <h2>{productItem.name}</h2>
            <div className={styles.description}></div>
            <Price price={productItem.price} discount={productItem.discount}/>
        </article>
    )
}

export default CurrentProduct
