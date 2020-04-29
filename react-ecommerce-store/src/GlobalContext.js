import React, { useState } from 'react'
import { storeProducts } from './data';

export const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState(storeProducts);

    return(
        <ProductContext.Provider value={{
            products
        }}>
            { children }
        </ProductContext.Provider>
    )
}