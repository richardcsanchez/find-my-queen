import React, { Component } from 'react';
import DragQueenImageCard from './DragQueenImageCard'
import AddTips from './AddTips'

class DragQueenGridCard extends Component {

constructor(props) {
  super(props);

    this.state = {
      tips: 0
  }
  this.handleAddTip=this.handleAddTip.bind(this)
}

handleAddTip(tip) {
   this.setState(({ tips }) => ({
     tips: tips + 1
   })
  )
}

render() {
  return(
    <div className='outer-container'>
        <DragQueenImageCard dragQueen={this.props.dragQueen}/>
        <AddTips
          tips={this.state.tips}
          onAddTip={this.handleAddTip}
          dragQueen={this.props.dragQueen}
         />
      Total Tips: ${this.state.tips}
    </div>
  )
}
}

export default DragQueenGridCard
