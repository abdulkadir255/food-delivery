import React, { useContext } from 'react'
import "./PlaceOrder.css"
import { StoreContext } from '../../context/StoreContext'

const placeOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />
        </div>
        <input type="text" placeholder='Emainl address' />
        <input type="text" placeholder='Street' />
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>

      <div className="place-order-right">
          <div className="cart-total">
          <h3>Cart Totals</h3>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivary Charge</p>
              <p>${3}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>${getTotalCartAmount()+3}</p>
            </div>
          </div>
            <button >PROCEED TO PAYMENT </button>
        </div>
      </div>
    </form>
  )
}

export default placeOrder
