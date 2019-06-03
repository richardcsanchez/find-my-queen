import React, { Component } from 'react';
import { connect } from 'react-redux'

class DragQueensContainer extends Component {

  render(){
    return(
      <div>
      <p>Queens</p>
        {this.setDragQueens()}
        </div>
      )
  }
}

const mapStateToProps = state => {
  return {
    dragQueens: state.dragQueens
  }
}

export default connect(mapStateToProps)(DragQueensContainer)
