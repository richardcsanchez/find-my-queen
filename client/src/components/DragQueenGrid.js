import React, { Component } from 'react';
import DragQueenGridCard from './DragQueenGridCard'


export default class DragQueenGrid extends Component {

  render() {
    const filterText = this.props.filterText
    const cards = []

    const sortedDragQueens = this.props.dragQueens.sort((function (a, b) {
      if (a.name < b.name) {
          return -1;
      }
      if (b.name > a.name) {
          return 1;
      }
      return 0;
    })
  )

    sortedDragQueens.forEach((dq) =>{
      const dqName = dq.name.toLowerCase()
      const lowerCaseFilterText = filterText.toLowerCase()

    if (dqName.indexOf(lowerCaseFilterText)) {
      return
    }
      cards.push(
        <DragQueenGridCard dragQueen={dq} key={dq.id}/>
      )
    }
  )

    return(

      <div>
      {cards}
      </div>
    )
  }
}
