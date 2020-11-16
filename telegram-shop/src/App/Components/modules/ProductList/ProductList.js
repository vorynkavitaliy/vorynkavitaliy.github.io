import React from 'react'
import styles from './product.module.sass'
import Price from './../../molecules/Price/Price';

const ProductList = ({products, initialState, changeState, filterByID}) => {

    const productList = filterByID(products, initialState.ides.category, 'category_id')

    const getProduct = id => {
        changeState({
            ...initialState, 
            productList: false, 
            currentProduct: true, 
            ides: {...initialState.ides, product: id}
        })
    }
    // console.log(productList);
    return (
        <section className={styles.products}>
            {productList && productList.map(product => 
                <article 
                    onClick={() => getProduct(product.id)}
                    key={product.name + product.id} 
                    className={styles.product}
                >
                    <div className={styles.picture}>
                        <img src={product.img[0]} alt={product.name}/>
                    </div>
                    <h3 className={styles.name}>{product.name}</h3>
                    <Price price={product.price} discount={product.discount}/>
                </article>
            )}
        </section>
    )
}

export default ProductList
