import React  from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";

const DragQueenImageCard = ({ dragQueen }) => {
  const urlBase = '/drag_queens/'


  return (
    <div>
    <button >
        <img src={dragQueen.img_url} alt={dragQueen.name} href={urlBase + dragQueen.id}/>
        <Link to={urlBase + dragQueen.id}>See More</Link>
        </button>
      </div>
  )
}

export default DragQueenImageCard;
