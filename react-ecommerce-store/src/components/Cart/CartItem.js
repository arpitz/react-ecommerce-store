import React from 'react'

const CartItem = ({ item, context }) => {

  const { id, img, title, price, total, count } = item;
  const { increment, decrement, removeItem } = context;

  return (
    <>
        <div className="row my-1 text-capitalize text-center">
          <div className='col-10 mx-auto col-lg-2'>
            <img src={img} alt="phone" className="img-fluid" style={{ width: '5rem', height: '5rem' }} />
          </div>
          <div className='col-10 mx-auto col-lg-2'>
            <p>{title}</p>
          </div>
          <div className='col-10 mx-auto col-lg-2'>
            <p>$  {price}</p>
          </div>
          <div className='col-10 mx-auto col-lg-2'>

          </div>
          <div className='col-10 mx-auto col-lg-2'>

          </div>
          <div className='col-10 mx-auto col-lg-2'>

          </div>
        </div>
    </>
  )
}

export default CartItem;