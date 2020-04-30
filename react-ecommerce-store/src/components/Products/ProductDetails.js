import React, { useContext } from 'react';
import { ProductContext } from '../../GlobalContext';
import { Link } from 'react-router-dom';
import { ButtonContainer } from '../../styled-components/ButtonContainer'

const ProductDetails = () => {
  const context = useContext(ProductContext);
  const { productDetails, addToCart, openModal } = context;
  const { id, img, title, price, company, info, inCart } = productDetails;

  const handleAddToCart = (id) => {
    addToCart(id);
    openModal(id);
  }

  return (
    <>
      <div className="container py-5">
        {/* Product Title */}
        <div className="row">
          <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
            <h1>{title}</h1>
          </div>
        </div>
        {/* Product Info */}
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img src={img} alt="Product" className="img-fluid" />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
            <h2>model : {title}</h2>
            <h4 className="text-uppercase text-muted mt-3 mb-2">
              made by : <span className="text-title text-uppercase">{company}</span>
            </h4>
            <h4 className="text-blue">
              <strong>price : <span>$ {price}</span></strong>
            </h4>
            <p className="text-capitalize font-weight-bold mt-3 mb-0">
              some info about product:
                        </p>
            <p className="text-muted lead">{info}</p>
            <div>
              <Link to="/">
                <ButtonContainer>back to products</ButtonContainer>
              </Link>
              <ButtonContainer cart disabled={inCart}
                onClick={() => handleAddToCart(id)}
              >
                {inCart ? "in Cart" : " add to cart"}
              </ButtonContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails;