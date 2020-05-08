import React from 'react'
import Product from './Product';

const MainPage = ({products}) => {
    return(
      <div>
        {
          products.map((product,i)=>{
            const imgStyle = {
              width:"150px",
              height: "150px",
              backgroundSize: "cover",
              backgrounbPosition:"center",
              backgroundImage:`url(${product.image})`
            };
            return(
              <Product
                key = {i}
                product = {product} 
                imgStyle={imgStyle} />
            )
          })
        }
      </div>
    )
}

export default MainPage;

