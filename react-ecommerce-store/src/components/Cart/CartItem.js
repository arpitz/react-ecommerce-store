import React from 'react'

const CartItem = ({ item, context }) => {

  const { id, img, title, price, total, count } = item;
  const { increment, decrement, removeItem } = context;

  return (
    <>
      <div className="row my-2 text-capitalize text-center">
        <div className='col-10 mx-auto col-lg-2'>
          <img src={img} alt="phone" className="img-fluid" style={{ width: '5rem', height: '5rem' }} />
        </div>
        <div className='col-10 mx-auto col-lg-2'>
          <span className="d-lg-none">product : </span> {title}
        </div>
        <div className='col-10 mx-auto col-lg-2'>
          <span className="d-lg-none">price : </span> {price}
        </div>
        <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
          <div className='d-flex justify-content-center'>
            <span className="btn btn-black mx-1" onClick={() => decrement(id)}><i className="fas fa-minus" /></span>
            <span className="btn btn-black mx-1">{count}</span>
            <span className="btn btn-black mx-1" onClick={() => increment(id)}><i className="fas fa-plus" /></span>
          </div>
        </div>
        <div className='col-10 mx-auto col-lg-2'>
          <div className="cart-icon">
            <i className="fas fa-trash" />
          </div>
        </div>
        <div className='col-10 mx-auto col-lg-2'>
          <strong>item total : ${total}</strong>
        </div>
      </div>
    </>
  )
}

export default CartItem;