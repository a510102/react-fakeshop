import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

function Product({ match }) {
  const [product, setProduct] = useState({});

  useEffect(()=>{
    FetchProduct();
  },[])

  const FetchProduct = async() => {
    const Url =`https://vue-course-api.hexschool.io/api/jay/product/${match.params.id}`;
    const response = await fetch(Url,{method:'GET', mode:'cors'});
    const data = await response.json();
    setProduct(data.product)
  }
   
  const imgStyle = {
    backgroundImage: `url(${product.image})`,
    height: "20rem",
    width: "30rem",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }
  return (
    <div className="product-detail">
      <div className="product-image" style={imgStyle}></div>
      <div className="product-content">
        <p>種類: { product.category }</p>
        <p>商品: { product.title }</p>
        <p>形容: { product.content }</p>
        <p>原價: { product['origin_price'] }</p>
        <p>特價: { product.price }</p>
      </div>
    </div> 
  )
}

export default Product