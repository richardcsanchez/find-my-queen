import React  from 'react';
import DeleteButton from '../containers/DeleteButton'
import { connect } from 'react-redux';
import DragQueens from '../containers/DragQueens'
const DragQueenCard = props => {

  const dragQueen = (props.match.params.id)

console.log(this.state)

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
