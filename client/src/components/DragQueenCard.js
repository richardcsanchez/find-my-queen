import React  from 'react';
import DeleteButton from '../containers/DeleteButton'
import { connect } from 'react-redux';
import DragQueens from '../containers/DragQueens'
import EditDragQueen from './EditDragQueen'
import { BrowserRouter as Router,  Route, NavLink } from 'react-router-dom';

const DragQueenCard = (props) => {

   const dragQueen = props.location.state.dragQueen

    return(
        <div className='LargeDragQueenCard'>
        <br></br>
        <h2>{dragQueen.name}</h2>
        <div className='DragQueenShowCard'>
        <img className ='DragQueenImage' alt={ dragQueen.name } src= {dragQueen.img_url} />
        </div>
        <br></br>
        <p>{dragQueen.hometown}</p>
        <p>{dragQueen.style}</p>
        <p>{dragQueen.bio}</p>
        <DeleteButton id={dragQueen.id} dragQueen={dragQueen}/>
        <button to= {{pathname: '/drag_queens/' + dragQueen.id + '/edit' , state: { dragQueen: dragQueen}}} >Edit</button>
        </div>
    )
  }
export default DragQueenCard
