import React, { Component } from 'react';
import { connect } from 'react-redux';

import DragQueenCard from '../components/DragQueenCard'
import DragQueenForm from '../containers/DragQueenForm'

import { getDragQueens } from '../actions/dragQueens'

class DragQueens extends Component {

  componentDidMount() {
    this.props.getDragQueens()
  }

  render() {
    return (
      <div>
      <DragQueenForm />
        <h2>Drag Queens:</h2>
        {this.props.dragQueens.map(dragQueen => <DragQueenCard key={dragQueen.id} dragQueen={dragQueen} />)}
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
