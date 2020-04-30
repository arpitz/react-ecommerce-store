import React, { useContext } from 'react';
import { ProductContext } from '../../GlobalContext';

const ProductDetails = () => {
    const context = useContext(ProductContext);
    const { detailProduct } = context;
    const {id, img, title, price, company, info, inCart} = detailProduct;
    console.log(detailProduct);
    return(
        <>
            <div className="container py-5">
                {/* Product Title */}
                <div className="row">
                    <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                        <h1>{ title }</h1>
                    </div>
                </div>
                {/* Product Info */}
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <img src={ img } alt="Product" className="img-fluid" />
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize"></div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails;