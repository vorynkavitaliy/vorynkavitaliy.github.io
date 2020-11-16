import React, {useReducer} from 'react'
import { DatabaseContext } from './databaseContext';
import { DatabaseReducer } from './databaseReducer';
import { LOAD_DATABASE } from '../types';

const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
const url = 'https://delivery-shop.amemory.pro/shop/menu/get-all-data?order_id=';
const orderId = new URLSearchParams(window.location.search).get('order_id');

const DatabaseState = ({children}) => {
    
    const initialState = {
        database: {}
    }

    const [stateDatabase, dispatchDatabase] = useReducer(DatabaseReducer, initialState)

    const getDatabase = async () =>{
        try {
            const response = await fetch(proxyUrl + url + orderId)
            if(response.ok){
                const database = await response.json()
                const payload = {
                    database
                }

                dispatchDatabase({
                    type: LOAD_DATABASE,
                    payload
                })
            }else{
                console.log("HTTP error: " + response.status);
            }
        } catch (error) {
            // throw new Error(error.message)
            console.log(error.message);
        }
    }
    

    return (
        <DatabaseContext.Provider value={{
            getDatabase, useDatabase: stateDatabase.database
        }}>
            {children}
        </DatabaseContext.Provider>
    )
}

export default DatabaseState