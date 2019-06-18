import React, { Component } from 'react';

class AddTips extends Component {

  state = {
    tips: 0
  }

  addSmallTip = () => {
    this.setState(({ tips }) => ({
      tips: tips + 1
    }))
  }

  addMediumTip = () => {
    this.setState(({ tips }) => ({
      tips: tips + 3
    }))
  }

  addLargeTip = () => {
    this.setState(({ tips }) => ({
      tips: tips + 5
    }))
  }

  render(){
    return (
      <div>
        Add a Tip:
          <br></br>
        <button className = "tip-button small-button" onClick={this.addSmallTip}>
          $1
        </button>
        <button className = "tip-button small-button" onClick={this.addMediumTip}>
          $3
        </button>
        <button className = "tip-button small-button" onClick={this.addLargeTip}>
          $5
        </button>
          <br></br>
        Total Tips: ${this.state.tips}
      </div>
    )
  }
}

export default AddTips
