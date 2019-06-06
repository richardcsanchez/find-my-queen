import React, { useState, useEffect } from 'react'
import '../components/DragQueensStyling.css'
import { withRouter } from 'react-router-dom'
import '../components/DragQueensStyling.css'

import fetch from '../modules/fetch'


function EditDragQueen({ match }) {
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

  const handleOnChange = e => {
    const { name, value } = e.target;
    setDragQueen({
      ...dragQueen,
        [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    fetch(`api/drag_queens/${match.params.id}`, 'PATCH', {
      drag_queen: {
        ...dragQueen
      }
    })
  }

  return (
    <div>
      <br></br>
      <p>Edit {dragQueen.name}</p>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label for="name">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Drag Queen Name"
            onChange={handleOnChange}
            value={dragQueen.name}
          />
          {
            dragQueen.errors
              ? <span>{dragQueen.errors.name}</span>
              : null
          }
        </div>

        <div className="form-field">
          <label for="hometown">Hometown:</label>
          <input
            type="text"
            name="hometown"
            placeholder="Drag Queen Hometown"
            onChange={handleOnChange}
            value={dragQueen.hometown}
          />
          {
            dragQueen.errors
              ? <span>{dragQueen.errors.name}</span>
              : null
          }
        </div>

        <div className="form-field">
          <label for="style">Style:</label>
          <input
            type="text"
            name="style"
            placeholder="Drag Queen Style"
            onChange={handleOnChange}
            value={dragQueen.style}
          />
          {
            dragQueen.errors
              ? <span>{dragQueen.errors.name}</span>
              : null
          }
        </div>

        <div className="form-field">
          <label for="bio">Bio:</label>
          <input
            type="text"
            name="bio"
            placeholder="Drag Queen Bio"
            onChange={handleOnChange}
            value={dragQueen.bio}
          />
          {
            dragQueen.errors
              ? <span>{dragQueen.errors.name}</span>
              : null
          }
        </div>

        <div className="form-field">
          <label for="img_url">Image url:</label>
          <input
            type="text"
            name="img_url"
            placeholder="Drag Queen Image url"
            onChange={handleOnChange}
            value={dragQueen.img_url}
          />
          {
            dragQueen.errors
              ? <span>{dragQueen.errors.name}</span>
              : null
          }
        </div>

        <div className="form-actions">
          <input type='submit' />
        </div>
      </form>
    </div>
  )
}

export default withRouter(EditDragQueen)
