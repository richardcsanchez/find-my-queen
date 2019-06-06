import React, { useState, useEffect }  from 'react';
import DeleteButton from '../containers/DeleteButton'
import { connect } from 'react-redux';
import DragQueens from '../containers/DragQueens'
import EditDragQueen from '../components/EditDragQueen.js'
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
      <p>{dragQueen.hometown}</p>
      <p>{dragQueen.style}</p>
      <p>{dragQueen.bio}</p>
      <DeleteButton id={dragQueen.id} dragQueen={dragQueen}/>
      <button>
        <Link to={{pathname: '/drag_queens/' + dragQueen.id + '/edit' }}>Edit</Link>
      </button>
    </div>
  )
}

export default withRouter(DragQueenCard)
