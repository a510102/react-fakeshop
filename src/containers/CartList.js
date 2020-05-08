import React from 'react'

const CardList = ({cartList}) => {
  console.log(cartList)

  return (
    <div className="Cart-list">
      <button>ShopCart</button>
      <div className="cart-produuct-list">
          {/* { */}
            {/* cartList[0].product.map(item => {
              const {category, origin_price, unit, price } = item;
              return (
                <div>
                  <p>{ category }</p>
                  <p>原價: { origin_price }</p>
                  <p>特價: { price }</p>
                  <p> { cartList.qty } / {unit}</p>
                  <p> { cartList.total }</p>
                </div>
              ) */}
            {/* }) */}
          {/* }   */}
      </div>
    </div>
  )
}

export default CardList