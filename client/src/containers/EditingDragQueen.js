import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editDragQueen } from '../actions/dragQueens';


  class EditingDragQueen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: props.dragQueen.id,
      name: props.dragQueen.name,
      hometown: props.dragQueen.hometown,
      style: props.dragQueen.style,
      bio: props.dragQueen.bio,
      img_url: props.dragQueen.img_url
    }
  }

handleOnChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
}

handleOnSubmit = e => {
  debugger
  e.preventDefault();
  editDragQueen(this.state);
  this.props.history.push(`/drag_queens/${this.state.id}`)
}

render() {
debugger
  return(

    <div className="container-fluid text-center">
      <form style={{marginTop: '16px'}} onSubmit={this.handleOnSubmit}>
        <label>
          Name: <br></br>
            <input
              className="form-control"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleOnChange}
            />
        </label><br></br>
        <label>
          hometown: <br></br>
            <input
              className="form-control"
              type="text"
              name="hometown"
              value={this.state.hometown}
              onChange={this.handleOnChange}
            />
        </label><br></br>
        <label>
          style: <br></br>
            <input
              className="form-control"
              type="style"
              name="style"
              value={this.state.style}
              onChange={this.handleOnChange}
            />
        </label><br></br>
        <label>
          bio: <br></br>
            <input
              className="form-control"
              type="bio"
              name="bio"
              value={this.state.bio}
              onChange={this.handleOnChange}
            />
        </label><br></br>
        <label>
          img_url: <br></br>
            <input
              className="form-control"
              type="text"
              name="img_url"
              value={this.state.img_url}
              onChange={this.handleOnChange}
            />
        </label><br></br>
                <div className="form-actions">
                  <input type='submit' />
                </div>
      </form>

    </div>
  )
}
}

const mapStateToProps = (state, props) => {
  let dragQueen = state.dragQueens.find(dragQueen => dragQueen.id === parseFloat(props.match.params.id))
  return { dragQueen: dragQueen}
}

export default connect(mapStateToProps, {editDragQueen})(EditingDragQueen)
