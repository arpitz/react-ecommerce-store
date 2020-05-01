import React, { useState, useEffect } from 'react'
import { storeProducts, detailProduct } from './data';

export const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
    const [ products, setProducts ] = useState([]);
    const [ productDetails, setProductDetails ] = useState(detailProduct);
    const [ cartItems, setCartItems ] = useState([]);
    const [ modalOpen, setModalOpen ] = useState(false);
    const [ modalProduct, setModalProduct ] = useState(detailProduct);
    const [ cartSubTotal, setCartSubTotal ] = useState(0);
    const [ cartTax, setCartTax ] = useState(0);
    const [ cartTotal, setCartTotal ] = useState(0);

    // To make a separate copy of products and not to use/manipulate the same products received from data
    useEffect(() => {
        newProductsCopy();
    }, []);

    const newProductsCopy = () => {
      let tempProducts = [];
        storeProducts.forEach(product => {
            const singleItem = { ...product };
            tempProducts = [ ...tempProducts, singleItem ];
        })
        setProducts(tempProducts);
    }

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

    const increment = (id) => {
      console.log('increment');
    }

    const decrement = (id) => {
      console.log('decrement');
    }

    const removeItem = (id) => {
      console.log('removeItem');
    }

    const clearCart = () => {
      setCartItems([]);
    }

    const addTotals = () => {
      let subTotal = 0;
      cartItems.map(item => subTotal += item.total);
      const tax = parseFloat((subTotal * 0.1).toFixed(2)); // Assuming the tax is 10%
      const total = subTotal + tax;
      setCartSubTotal(subTotal);
      setCartTax(tax);
      setCartTotal(total);
    }

    useEffect(() => {
      if(!cartItems.length) {
        newProductsCopy();
      }
      addTotals();
    }, [ cartItems ])

    return(
        <ProductContext.Provider value={{
            products,
            productDetails,
            addToCart,
            handleDetail,
            modalOpen,
            modalProduct,
            openModal,
            closeModal,
            cartItems,
            cartSubTotal,
            cartTax,
            cartTotal,
            increment,
            decrement,
            clearCart,
            removeItem
        }}>
            { children }
        </ProductContext.Provider>
    )
}