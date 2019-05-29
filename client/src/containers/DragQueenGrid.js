import React, { Component } from 'react';
import  DragQueenImageCard from '../components/DragQueenImageCard'
import { connect } from 'react-redux'

class DragQueenGrid extends Component {


  sortByName = (a, b) => {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1
    return 0
  }



  render(){
    return (
      <div className='col s12'>
      {this.props.dragQueens.map(dragQueen =>
        <DragQueenImageCard key={dragQueen.id} dragQueen={dragQueen} />)}
      </div>
    )
  }
}

export default DragQueenGrid
