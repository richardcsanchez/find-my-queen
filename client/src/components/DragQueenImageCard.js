import React  from 'react';
import { BrowserRouter as Router,  Route, NavLink } from 'react-router-dom';
import '../components/DragQueensStyling.css'
import AddTips from './AddTips'

const DragQueenImageCard = ({ dragQueen }) => {
  const urlBase = '/drag_queens'


  return (
      <div className='outer-container'>
        <div className='DragQueenCard' >
          <NavLink to= {{pathname: urlBase + "/" + dragQueen.id}} >
            <img className='DragQueenImage' src={dragQueen.img_url} alt={dragQueen.name} />
          </NavLink>
        </div>
      <AddTips />
    </div>
  )
}

export default DragQueenImageCard;
