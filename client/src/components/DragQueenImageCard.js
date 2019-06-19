import React  from 'react';
import { BrowserRouter as Router,  Route, NavLink } from 'react-router-dom';
import '../components/DragQueensStyling.css'
import AddTips from './AddTips'

class DragQueenImageCard extends React.Component {


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
    }))
    console.log(this.props.dragQueen)
  }

  render(){
    const urlBase = '/drag_queens'
  return (
      <div className='outer-container'>
        <div className='DragQueenCard' >
          <NavLink dragQueen= {this.props.dragQueen} to= {{pathname: urlBase + "/" + this.props.dragQueen.id}} >
            <img className='DragQueenImage' src={this.props.dragQueen.img_url} alt={this.props.dragQueen.name} />
          </NavLink>
        </div>
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
export default DragQueenImageCard;
