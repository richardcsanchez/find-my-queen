import React, { Component } from 'react';
import DragQueenCard from '../components/DragQueenCard'
import DragQueenForm from '../containers/DragQueenForm'
class DragQueens extends Component {

  render (){
    return(
      <div>
      <DragQueenForm />
        <h2>Drag Queens:</h2>
        { this.props.dragQueens.map(dragQueen => <DragQueenCard key={dragQueen.id} dragQueen={dragQueen} />)}

      </div>
    )
   }
  }

export default DragQueens;
