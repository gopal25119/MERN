import React from "react";

export default function Product(props) {
 console.log(props)
 // console.log(props)
  return (
    <div className='row'>
      <div className='col-6'>
        <h2> {props.gopal.name}</h2>
      </div>
    </div>
  )
}
