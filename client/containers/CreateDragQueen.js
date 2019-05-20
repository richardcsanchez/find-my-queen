import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createEvent } from '../actions'

class CreateDragQueen extends Component {

  constructor(){
    super()

    this.state = {
    name: '',
    city: '',
    style: '',
    bio: '',
    img_url: '',
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.dispatch({ type: 'ADD_DRAG_QUEEN', payload: this.state })
  }

  render() {
    return (
      <div>
      <p>Add Drag Queen</p>
        <form onSubmit={event => this.handleSubmit(event)}>
            <label>
            Name:
              <br>
            <input
              type="text"
              name="name"
              placeholder="Drag Queen Name"
              onChange={event => this.handleChange}
              value = {this.state.name}
              />
              </label><br>
            City:
              <br>
            <input
              type='text'
              name='city'
              placeholder='Home City'
              onChange={event=> this.handleChange}
              value={this.state.city}
              />
                </label><br>
              Style:
                <br>
              <input
                type='text'
                name='style'
                placeholder='Drag Style'
                onChange={event=> this.handleChange}
                value={this.state.style}
                />
                  </label><br>
                Bio:
                  <br>
              <input
                type='text'
                name='bio'
                placeholder='Bio'
                onChange={event=> this.handleChange}
                value={this.state.bio}
                />
                  </label><br>
                Home City:
                  <br>
                <input
                  type='text'
                  name='city'
                  placeholder='Home City'
                  onChange={event=> this.handleChange}
                  value={this.state.city}
                  />
                    </label><br>
                  Image Link:
                    <br>
                  <input
                    type='text'
                    name='img_url'
                    placeholder='Image URL'
                    onChange={event=> this.handleChange}
                    value={this.state.img_url}
                    />
                      </label><br>
              <input type='submit' />
            </form>
          <div>
    )
  }
}

export default connect()(CreateDragQueen);
