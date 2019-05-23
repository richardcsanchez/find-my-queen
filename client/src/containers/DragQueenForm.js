import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createDragQueen } from '../actions/dragQueens'

import { updateDragQueenFormData } from '../actions/dragQueenForm'
class DragQueenForm extends Component {


  handleOnChange = e => {
    const { name, value } = e.target;
    const currentDragQueenData = Object.assign({}, this.props.dragQueenFormData, {
      [name]: value
    })
    this.props.updateDragQueenFormData(currentDragQueenData)
  }

  handleOnSubmit = e => {
    e.preventDefault()
    this.props.createDragQueen(this.props.dragQueenFormData)
  }

  render() {
    const { name, hometown, style, bio, img_url } = this.props.dragQueenFormData;
    return (
      <div>
      <p>Add Drag Queen</p>
        <form onSubmit={event => this.handleSubmit(event)}>
            <label>
            Name:
              <br></br>
            <input
              type="text"
              name="name"
              placeholder="Drag Queen Name"
              onChange={this.handleOnChange}
              value = {this.state.name}
              />
              </label><br></br>
            Hometown:
              <br></br>
              <label>
            <input
              type='text'
              name='city'
              placeholder='Hometown'
              onChange={this.handleOnChange}
              value={this.state.hometown}
              />
                </label><br></br>
              Style:
                <br></br>
                <label>
              <input
                type='text'
                name='style'
                placeholder='Drag Style'
                onChange={this.handleOnChange}
                value={this.state.style}
                />
                  </label><br></br>
                Bio:
                  <br></br>
                  <label>
              <input
                type='text'
                name='bio'
                placeholder='Bio'
                onChange={this.handleOnChange}
                value={this.state.bio}
                />
                  </label><br></br>
                    <label>
                  Image Link:
                    <br></br>
                  <input
                    type='text'
                    name='img_url'
                    placeholder='Image URL'
                    onChange={this.handleOnChange}
                    value={this.state.img_url}
                    />
                      </label><br></br>
              <input type='submit' />
            </form>
          </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    dragQueenFormData: state.dragQueenFormData
  }
}


export default connect(mapStateToProps, { updateDragQueenFormData, createDragQueen } )(DragQueenForm);
