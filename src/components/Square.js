import React from 'react'
import "../App.css"

/**
* @author siddalingeshwara m v
* @function Square
**/

const Square = (props) => {
  return(
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
   )

 }

export default Square