import React  from 'react';
import { BrowserRouter as Router,  Route, NavLink } from 'react-router-dom';
import '../components/DragQueensStyling.css'

const DragQueenImageCard = ({ dragQueen }) => {
  const urlBase = '/drag_queens'

  return (
    <div className='DragQueenCard' >
    <NavLink to= {{pathname: urlBase + "/" + dragQueen.id}} >
        <img className='DragQueenImage' src={dragQueen.img_url} alt={dragQueen.name} />
        </NavLink>

      </div>
  )
}

export default DragQueenImageCard;
