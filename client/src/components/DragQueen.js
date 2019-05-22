import React from 'react';
import { setDragQueens } from "../actions/dragQueens"
const DragQueen = (props) => {

    return (
    <div>
    <h2>Drag Queens:</h2>
    { props.dragQueens.map(dragQueen =>
      <div>
      <h2>{dragQueen.name}</h2>
      <img alt={ dragQueen.name } src= {dragQueen.img_url} />
      <p>{dragQueen.hometown}</p>
      <p>{dragQueen.style}</p>
      <p>{dragQueen.bio}</p>
      </div>
    )}
  </div>
  )
}

export default DragQueen;
