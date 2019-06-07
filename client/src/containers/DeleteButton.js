import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteDragQueen } from '../actions/dragQueens'

class DeleteButton extends Component {

  handleOnClick = () => {
    this.props.deleteDragQueen(this.props.dragQueen.id)
  }

  render() {
    return (
        <button className="small-button" onClick={this.handleOnClick}>
        Delete
        </button>
    )}
}
    const mapStateToProps = state => {
      return {
        dragQueens: state.dragQueens
      }
    }


export default connect(mapStateToProps, { deleteDragQueen } )(DeleteButton);
