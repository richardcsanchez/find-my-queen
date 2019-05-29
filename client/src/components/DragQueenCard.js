import React, { component }  from 'react';
import {deleteDragQueen} from '../actions/dragQueens'
import DeleteButton from '../containers/DeleteButton'


const DragQueenCard = ({ dragQueen }) => {

  return(
    <div>
    <h2>{dragQueen.name}</h2>
    <img alt={ dragQueen.name } src= {dragQueen.img_url} />
    <p>{dragQueen.hometown}</p>
    <p>{dragQueen.style}</p>
    <p>{dragQueen.bio}</p>
    <DeleteButton id={dragQueen.id} dragQueen={dragQueen}/>
    </div>
)
}

export default DragQueenCard
