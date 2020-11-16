import React from 'react'
import styles from './price.module.sass'
const Price = ({price, discount}) => {

    const discountPrice = discount.discount && discount.discount_type === 1 
                        ? +price - +discount.discount 
                        : +price - Math.ceil(+price*+discount.discount/100) 

    return (
        <div className={styles.prices}>
            
            <span className={`${styles.price} ${discount.discount && styles.old__price}`}>{price} UAH</span>
            
            {discount.discount && <span className={`${styles.new__price}`}>{discountPrice} UAH</span>}
            
        </div>
    )
}

export default Price
