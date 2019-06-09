import React, { useState, useEffect }  from 'react';
import DeleteButton from '../containers/DeleteButton'
import { BrowserRouter as Router,  Route, NavLink, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import fetch from '../modules/fetch'

function DragQueenCard({ match }) {
  const [dragQueen, setDragQueen] = useState({
    name: '',
    hometown: '',
    img_src: '',
    bio: '',
    style: ''
  })

  useEffect(() => {
    fetch(`api/drag_queens/${match.params.id}`, 'GET')
    .then(json => setDragQueen(json))
  }, [])


  return(
    <div className='LargeDragQueenCard'>
      <br></br>
        <h2>{dragQueen.name}</h2>
      <div className='DragQueenShowCard'>
        <img className ='DragQueenImage' alt={ dragQueen.name } src= {dragQueen.img_url} />
      </div>
      <br></br>
      <h4>Hometown:</h4>
      <p>{dragQueen.hometown}</p>
      <h4>Drag Style:</h4>
      <p>{dragQueen.style}</p>
      <h4>Bio:</h4>
      <p>{dragQueen.bio}</p>
      <button className='small-button'>
        <Link className='link'key={dragQueen.id} to={{pathname: '/drag_queens/' + dragQueen.id + '/edit' } }>Edit</Link>
      </button>

      <DeleteButton id={dragQueen.id} dragQueen={dragQueen}/>

    </div>
  )
}


export default withRouter(DragQueenCard)
