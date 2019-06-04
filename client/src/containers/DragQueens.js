import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../components/DragQueensStyling.css'
import DragQueenImageCard from '../components/DragQueenImageCard'
import { getDragQueens } from '../actions/dragQueens'

export class DragQueens extends Component {

  componentDidMount() {
    this.props.getDragQueens()
  }

  sortByName = (a, b) => {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1
    return 0
  }

  

  render() {
    return (
      <div>
        <h2>Drag Queens:</h2>
        <div className='DragQueensContainer'>
        {this.props.dragQueens.sort(this.sortByName).map(dragQueen =>
          <DragQueenImageCard key={dragQueen.id} dragQueen={dragQueen} />)}
          </div>
      </div>
    )
   }
  }

const mapStateToProps = state => {
  console.log(state)
  return ({
    dragQueens: state.dragQueens
  })
}


export default connect(mapStateToProps, {getDragQueens})(DragQueens);
