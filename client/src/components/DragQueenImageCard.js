import React, { component }  from 'react';

const DragQueenImageCard = ({ dragQueen }) => {
  const urlBase = 'http://localhost:3001/api/drag_queens/'

  return (
    <div>
    <button>
        <img src={dragQueen.img_url} alt={dragQueen.name} href={urlBase + dragQueen.id}/>
        </button>
      </div>
  )
}

export default DragQueenImageCard;
