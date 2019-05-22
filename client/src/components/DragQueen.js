import React from 'react';
import { setDragQueens } from '../actions/dragQueens'

export const DragQueen = (props) => {


  return(
    <div>
    <h2>Drag Queens:</h2>
      <h2>{props.name}</h2>
      <br></br>
      <img alt={props.name} src={props.img_url}/>
      <br></br>
      <p>{props.city}</p>
      <p>{props.style}</p>
      <p>{props.bio}</p>
      </div>
  )
}

export default DragQueen;
