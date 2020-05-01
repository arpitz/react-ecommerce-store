import React, { useContext } from 'react';
import Title from '../Title/Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { ProductContext } from '../../GlobalContext';
import CartList from './CartList';
import CartTotals from './CartTotals';

const Cart = () => {
  const context = useContext(ProductContext);
  const { cartItems } = context;

    return cartItems.length ? (
        <>
          <section className="my-5">
            <Title name="your" title="cart" />
            <CartColumns />
            <CartList context={ context } />
            <CartTotals context={ context } />
          </section>
        </>
    ) :
    (
      <>
          <section>
            <EmptyCart />
          </section>
        </>
    )
}

export default Cart;