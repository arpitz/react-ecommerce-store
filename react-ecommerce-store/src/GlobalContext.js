import React, { useState, useEffect } from 'react'
import { storeProducts, detailProduct } from './data';

export const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    // To make a separate copy of products and not to use/manipulate the same products received from data
    useEffect(() => {
        let tempProducts = [];
        storeProducts.forEach(product => {
            const singleItem = { ...product };
            tempProducts = [ ...tempProducts, singleItem ];
        })
        setProducts(tempProducts);
    }, []);

    return(
        <ProductContext.Provider value={{
            products,
            detailProduct
        }}>
            { children }
        </ProductContext.Provider>
    )
}