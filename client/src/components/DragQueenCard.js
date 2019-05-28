import React, { component }  from 'react';

const DragQueenCard = ({ dragQueen }) => {

  return(
    <div>
    <h2>{dragQueen.name}</h2>
    <img alt={ dragQueen.name } src= {dragQueen.img_url} />
    <p>{dragQueen.hometown}</p>
    <p>{dragQueen.style}</p>
    <p>{dragQueen.bio}</p>
    </div>
)
}

export default DragQueenCard
