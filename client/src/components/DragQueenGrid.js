import React, { Component } from 'react';
import DragQueens from '../containers/DragQueens'
import DragQueenImageCard from './DragQueenImageCard'

export default class DragQueenGrid extends Component {

  sortByName = (a, b) => {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1
    return 0
  }

  render(){
    return(
      <div>
      { this.props.dragQueens.sort(this.sortByName).map(dragQueen =>
          <DragQueenImageCard key={dragQueen.id} dragQueen={dragQueen}  />)}
      </div>
    )
  }

}
