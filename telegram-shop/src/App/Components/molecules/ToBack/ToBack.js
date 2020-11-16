import React from 'react'
import styles from './toback.module.sass'
const ToBack = ({initialState, changeState}) => {

    const goBack = () => {
        initialState.productList && changeState({...initialState, categoryList: true, productList: false})
        initialState.currentProduct && changeState({...initialState, productList: true, currentProduct: false})
    }


    return (
        <span className={styles.btn} onClick={() => goBack()}>go back</span>
    )
}

export default ToBack
