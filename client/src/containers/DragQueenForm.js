import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createDragQueen } from '../actions/dragQueens'
import { Redirect } from 'react-router'

class DragQueenForm extends Component {

  constructor(props){
    super(props)

    this.state = {
      dragQueen: {
        name: "",
        hometown: "",
        style: "",
        bio: "",
        img_url: ""
      },
      redirect: false
    }
  }


  handleOnChange = e => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
        [name]: value
    })
  }

  handleOnSubmit = e => {
    e.preventDefault()
    this.props.createDragQueen(this.state)
    this.setState({
      dragQueen: {
        name: "",
        hometown: "",
        style: "",
        bio: "",
        img_url: ""
      },
      redirect: true
    })
  }



  render() {
    return (
      <div>
      { this.state.redirect === true ? <Redirect to='/drag_queens' /> : null }
        <form onSubmit={this.handleOnSubmit}>
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
              name='hometown'
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
    dragQueen: state.dragQueen
  }
}


export default connect(mapStateToProps, { createDragQueen } )(DragQueenForm);
