import React from 'react'

const Product = ({product, imgStyle}) => {
  const {image, category, content, description} = product; 
  return(
    <div  className="product-list">
      {image ? 
      <div style ={imgStyle}></div> : 
      ''}
      <p>{category}</p>
      <p>{content}</p>
      <p>{description}</p>
      <input type="button" value="...more" />
      <input type="button" value="add to cart" />
    </div>
  )
}

export default Product;