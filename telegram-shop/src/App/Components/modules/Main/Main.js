import React, {Fragment, useContext, useEffect, useState} from 'react'
import Header from './../Header/Header';
import { DatabaseContext } from './../../../context/database/databaseContext';
import CategoryList from './../CategoryList/CategoryList';
import ProductList from '../ProductList/ProductList';
import CurrentProduct from './../CurrentProduct/CurrentProduct';


const Main = () => {
    const initialState = {
        categoryList: true,
        productList: false,
        currentProduct: false,
        cart: false,
        ides: {
            category: Number,
            product: Number
        }
    }

    const [state, setState] = useState(initialState)
    const {getDatabase, useDatabase} = useContext(DatabaseContext)
    useEffect(() => {
        getDatabase()
        // eslint-disable-next-line
    }, [])
    const {categories, products} = {...useDatabase.database}

    const filterByID = (arr, id, key) => {
        return arr.filter(item => {
            return (item[key] === id);
        });
    };

    return (
        <Fragment>
            <Header initialState={state} changeState={setState}/>
            {
                state.categoryList && <CategoryList 
                    categories={categories} 
                    initialState={state} 
                    changeState={setState}
                />
            }

            {
                state.productList && <ProductList 
                    products={products}
                    initialState={state}
                    changeState={setState}
                    filterByID={filterByID}
                />
            }

            {
                state.currentProduct && <CurrentProduct
                    products={products}
                    initialState={state}
                    filterByID={filterByID}
                />
            }

        </Fragment>
    )
}

export default Main
