import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../components/DragQueensStyling.css'
import { getDragQueens } from '../actions/dragQueens'
import DragQueenGrid from '../components/DragQueenGrid'

export class DragQueens extends Component {

  componentDidMount() {
    this.props.getDragQueens()
  }

  render() {
    return (
      <div>
        <h2>Drag Queens:</h2>
          <div className='DragQueensContainer'>
            <DragQueenGrid dragQueens={this.props.dragQueens}  />
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
