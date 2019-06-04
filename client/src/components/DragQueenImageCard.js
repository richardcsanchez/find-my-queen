import React  from 'react';
import App from '../containers/App.css'
import { BrowserRouter as Router,  Route, NavLink } from 'react-router-dom';
import '../components/DragQueensStyling.css'
import DragQueenCard from './DragQueenCard'
const DragQueenImageCard = ({ dragQueen }) => {
  const urlBase = '/drag_queens'


  return (
    <div className='DragQueenCard' >
    <NavLink to= {{pathname: urlBase + "/" + dragQueen.id, state: { dragQueen: dragQueen}}} >
        <img className='DragQueenImage' src={dragQueen.img_url} alt={dragQueen.name} />
        </NavLink>

      </div>
  )
}



export default DragQueenImageCard;
