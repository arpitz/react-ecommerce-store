import React, { useState, useEffect } from 'react'
import { storeProducts, detailProduct } from './data';

export const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
    const [ products, setProducts ] = useState([]);
    const [ productDetails, setProductDetails ] = useState(detailProduct);
    const [ cartItems, setCartItems ] = useState([]);
    const [ modalOpen, setModalOpen ] = useState(false);
    const [ modalProduct, setModalProduct ] = useState(detailProduct);

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
        let tempProducts = [...products];
        const index = tempProducts.indexOf(getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        product.total = product.price;
        setProducts(tempProducts);
        setCartItems([ ...cartItems, product ]);
    }

    useEffect(() => {
      console.log(cartItems);
      console.log(products);
    }, [cartItems]);

    const handleDetail = (id) => {
        const product = getItem(id);
        setProductDetails(product);
    }

    const openModal = (id) => {
      setModalOpen(true);
      setModalProduct(getItem(id));
    }

    const closeModal = () => {
      setModalOpen(false);
    }

    return(
        <ProductContext.Provider value={{
            products,
            productDetails,
            addToCart,
            handleDetail,
            modalOpen,
            modalProduct,
            openModal,
            closeModal
        }}>
            { children }
        </ProductContext.Provider>
    )
}