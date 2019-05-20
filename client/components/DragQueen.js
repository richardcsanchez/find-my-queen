import React from 'react';

export const DragQueen = (props) => {

  return(
    <div>
      <h2>{props.dragQueen.name}</h2>
      <br>
      <img alt={props.dragQueen.name} src={props.dragQueen.img_url}>
      <br>
      <p>{props.dragQueen.city}</p>
      <p>{props.dragQueen.style}</p>
      <p>{props.dragQueen.bio}</p>
      </div>
  )
}
