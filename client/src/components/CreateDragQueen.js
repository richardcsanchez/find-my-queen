import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateDragQueen extends Component {

  constructor(props){
    super(props)

    this.state = {
    name: '',
    city: '',
    style: '',
    bio: '',
    img_url: '',
    }
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleOnSubmit = e => {
    e.preventDefault()
    this.props.addDragQueen()
  }

  render() {
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
            City:
              <br></br>
              <label>
            <input
              type='text'
              name='city'
              placeholder='Home City'
              onChange={this.handleOnChange}
              value={this.state.city}
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
                Home City:
                  <br></br>
                <input
                  type='text'
                  name='city'
                  placeholder='Home City'
                  onChange={this.handleOnChange}
                  value={this.state.city}
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


export default CreateDragQueen;
