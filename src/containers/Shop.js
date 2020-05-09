import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    FetchProducts();
  },[])

  const FetchProducts = async() => {
    const Url = 'https://vue-course-api.hexschool.io/api/jay/products';
    const response = await fetch(Url,{method:'GET', mode:'cors'});
    const datas = await response.json();
    setProducts(datas.products)
  }

  return (
    <ul className="product-list">
        { 
          products.map(product => {
            const imgStyle = {
              backgroundImage: `url(${product.image})`,
              height: "15rem",
              width: "15rem",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }
            return (
              <li className="product-item" key = { product.id } >
              <Link to={`shop/${ product.id }`}>
                <div className="product-img" style={imgStyle} ></div>
              </Link>
                <div className="product-content">
                  <p>種類: { product.category }</p>
                  <Link to={`shop/${ product.id }`}>
                    <p>{ product.content }</p>
                  </Link>
                  <p>原價:{ product['origin_price'] }</p>
                  <p>特價:{ product.price }</p>
                </div>
              </li>
            )
        })
      }
    </ul> 
  )
}

export default Shop