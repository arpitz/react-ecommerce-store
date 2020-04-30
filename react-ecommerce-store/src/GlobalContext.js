import React, { useState, useEffect } from 'react'
import { storeProducts, detailProduct } from './data';

export const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [ productDetails, setProductDetails ] = useState(detailProduct);

    // To make a separate copy of products and not to use/manipulate the same products received from data
    useEffect(() => {
        let tempProducts = [];
        storeProducts.forEach(product => {
            const singleItem = { ...product };
            tempProducts = [ ...tempProducts, singleItem ];
        })
        setProducts(tempProducts);
    }, []);

    const getItem = (id) => {
        return products.find(item => item.id === id);
    }

    const addToCart = (id) => {
        console.log('added to cart id : '+ id);
    }

    const handleDetail = (id) => {
        const product = getItem(id);
        setProductDetails(product);
    }

    return(
        <ProductContext.Provider value={{
            products,
            productDetails,
            addToCart,
            handleDetail
        }}>
            { children }
        </ProductContext.Provider>
    )
}