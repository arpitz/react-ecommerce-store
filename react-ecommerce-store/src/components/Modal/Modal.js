import React, { useContext } from 'react'
import styled from 'styled-components'
import { ProductContext } from '../../GlobalContext';
import { Link } from 'react-router-dom';
import { ButtonContainer } from '../../styled-components/ButtonContainer';

const Modal = () => {
  const { modalOpen, closeModal, modalProduct } = useContext(ProductContext);
  const { img, title, price } = modalProduct;

  return (
    modalOpen ? (
      <>
        <ModalContainer>
          <div className="container">
            <div className="row">
              <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                <h4>item added to the cart</h4>
                  <img src={img} alt="phone" className="img-fluid" />
                <h5>{title}</h5>
                <h5 className="text-muted">price: ${price}</h5>
                <Link to="/">
                  <ButtonContainer onClick={() => closeModal()}>
                    continue shopping
                  </ButtonContainer>
                </Link>
                <Link to="/cart">
                  <ButtonContainer cart onClick={() => closeModal()}>
                    go to cart
                  </ButtonContainer>
                </Link>
              </div>
            </div>
          </div>
        </ModalContainer>
      </>
    ) : null
  )
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }

`

export default Modal;