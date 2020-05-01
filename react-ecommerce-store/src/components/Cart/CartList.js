import React from 'react'
import CartItem from './CartItem';

const CartList = ({ context }) => {

  const { cartItems } = context;
  return(
    <>
    <div className="container-fluid">
      {
        cartItems.map(item => <CartItem key={item.id} item={ item } context={context} />)
      }
    </div>
    </>
  )
}

export default CartList;