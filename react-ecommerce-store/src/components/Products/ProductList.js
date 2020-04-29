import React, { useContext } from 'react';
import Title from '../Title/Title';
import { ProductContext } from '../../GlobalContext';
import Product from './Product';

const ProductList = () => {
    const context = useContext(ProductContext);
    const products = context.products;
    return (
        <>
            <div className="py-5">
                <div className="container">
                    <Title name="our" title="products" />
                    <div className="row">
                        {
                            products.map(product => <Product key={product.id} product={product} />)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductList;