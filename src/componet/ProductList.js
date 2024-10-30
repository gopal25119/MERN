import React from "react";
import Product from "./Product";


export default function ProductList(props) {
 console.log(props)
  return (
    props.productList.map((gopal,i)=>{
        return <Product gopal={gopal} key={i} />
  })
)
}
