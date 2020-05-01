import React from 'react';
import Title from '../Title/Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';

const Cart = () => {
    return(
        <>
          <section>
            <Title name="your" title="cart" />
            <CartColumns />
            <EmptyCart />
          </section>
        </>
    )
}

export default Cart;