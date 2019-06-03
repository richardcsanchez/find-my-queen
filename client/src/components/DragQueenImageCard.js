import React  from 'react';
import App from '../containers/App.css'
import { BrowserRouter as Router,  NavLink } from 'react-router-dom';
import '../components/DragQueensStyling.css'


const DragQueenImageCard = ({ dragQueen }) => {
  const urlBase = '/drag_queens/'


  return (
    <div className='DragQueenCard' >
    <NavLink to={urlBase + dragQueen.id} >
        <img className='DragQueenImage' src={dragQueen.img_url} alt={dragQueen.name} href={urlBase + dragQueen.id}/>
        </NavLink>
      </div>
  )
}

export default DragQueenImageCard;
