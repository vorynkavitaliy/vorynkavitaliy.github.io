import React from 'react'
import styles from './category.module.sass'
const CategoryList = ({categories, initialState, changeState}) => {
    
    const getCategory = id => {
        changeState({
            ...initialState, 
            categoryList: false, 
            productList: true, 
            ides: {...initialState.ides, category: id}
        })
    }
    const categoryList = categories && categories.map(category => {
        return (
            <article 
                onClick={() => getCategory(category.id)} 
                key={category.name + category.id} 
                className={styles.category}
            >
                <div className={styles.picture}>
                    <img src={category.img} alt={category.name}/>
                </div>
                <h3 className={styles.name}>{category.name}</h3>
            </article>
        )
    })
    return <section className={styles.categories}> {categoryList} </section>
}

export default CategoryList
