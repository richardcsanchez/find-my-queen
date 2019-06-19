import React  from 'react';
import { BrowserRouter as Router,  Route, NavLink } from 'react-router-dom';
import '../components/DragQueensStyling.css'

class DragQueenImageCard extends React.Component {

  render(){
    const urlBase = '/drag_queens'
      return (
            <div className='DragQueenCard' >
              <NavLink dragQueen= {this.props.dragQueen} to= {{pathname: urlBase + "/" + this.props.dragQueen.id}} >
                <img className='DragQueenImage' src={this.props.dragQueen.img_url} alt={this.props.dragQueen.name} />
              </NavLink>
        </div>
      )
    }
}
export default DragQueenImageCard;
