import React from 'react'
import styles from './counter.module.sass'
const Counter = ({quantity}) => {
    return (
        <div>
            <button className={styles.plus}>+</button>
            <span className={styles.quantity}>{quantity}</span>
            <button className={styles.minus}>-</button>

        </div>
    )
}

export default Counter
