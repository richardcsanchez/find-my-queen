import React, { Component } from 'react';
import { connect } from 'react-redux';

import DragQueenImageCard from '../components/DragQueenImageCard'
import DragQueenCard from '../components/DragQueenCard'

import { getDragQueens } from '../actions/dragQueens'

class DragQueens extends Component {

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
      {this.props.dragQueens.sort(this.sortByName).map(dragQueen =>
        <DragQueenCard key={dragQueen.id} dragQueen={dragQueen} />)}
        <h2>Drag Queens:</h2>
        <div className='gallery clearfix'>
        {this.props.dragQueens.sort(this.sortByName).map(dragQueen =>
          <DragQueenImageCard key={dragQueen.id} dragQueen={dragQueen} />)}
          </div>
      </div>
    )
   }
  }

const mapStateToProps = state => {
  return ({
    dragQueens: state.dragQueens
  })
}


export default connect(mapStateToProps, { getDragQueens })(DragQueens);
