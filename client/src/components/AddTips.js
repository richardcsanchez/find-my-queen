import React, { Component } from 'react';

class AddTips extends Component {

  constructor(props){
    super(props)
    this.handleAddTip=this.handleAddTip.bind(this)
  }

  handleAddTip(e){
    this.props.onAddTip(e.target.value)
  }

  render(){
    return (
      <div>
        Add a Tip:
          <br></br>
        <button className = "tip-button small-button"
          onClick={this.handleAddTip}>
          $1
        </button>
          <br></br>
      </div>
    )
  }
}

export default AddTips
