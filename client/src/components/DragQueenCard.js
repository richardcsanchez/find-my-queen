import React  from 'react';
import DeleteButton from '../containers/DeleteButton'
import { connect } from 'react-redux';
import DragQueens from '../containers/DragQueens'
import EditDragQueen from './EditDragQueen'
import { BrowserRouter as Router,  Route, NavLink } from 'react-router-dom';

const DragQueenCard = (props) => {
  console.log(props)

   const dragQueen = props.location.state.dragQueen

    return(
        <div>
        <h2>{dragQueen.name}</h2>
        <img alt={ dragQueen.name } src= {dragQueen.img_url} />
        <p>{dragQueen.hometown}</p>
        <p>{dragQueen.style}</p>
        <p>{dragQueen.bio}</p>
        <DeleteButton id={dragQueen.id} dragQueen={dragQueen}/>
        <NavLink to= {{pathname: '/drag_queens/' + dragQueen.id + '/edit' , state: { dragQueen: dragQueen}}} >Edit</NavLink>
        </div>
    )
  }
export default DragQueenCard
