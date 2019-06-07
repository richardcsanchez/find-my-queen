import React, { useState, useEffect } from 'react'
import '../components/DragQueensStyling.css'
import { withRouter } from 'react-router-dom'
import '../components/DragQueensStyling.css'
import { editDragQueen } from '../actions/dragQueens'
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
    editDragQueen(dragQueen)
  }

  return (
    <div>
      <br></br>
      <p>Edit {dragQueen.name}</p>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label >Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Drag Queen Name"
            onChange={handleOnChange}
            value={dragQueen.name}
          />

        </div>

        <div className="form-field">
          <label >Hometown:</label>
          <input
            type="text"
            name="hometown"
            placeholder="Drag Queen Hometown"
            onChange={handleOnChange}
            value={dragQueen.hometown}
          />

        </div>

        <div className="form-field">
          <label >Style:</label>
          <input
            type="text"
            name="style"
            placeholder="Drag Queen Style"
            onChange={handleOnChange}
            value={dragQueen.style}
          />

        </div>

        <div className="form-field">
          <label >Bio:</label>
          <input
            type="text"
            name="bio"
            placeholder="Drag Queen Bio"
            onChange={handleOnChange}
            value={dragQueen.bio}
          />

        </div>

        <div className="form-field">
          <label >Image url:</label>
          <input
            type="text"
            name="img_url"
            placeholder="Drag Queen Image url"
            onChange={handleOnChange}
            value={dragQueen.img_url}
          />

        </div>

        <div className="form-actions">
          <input type='submit' />
        </div>
      </form>
    </div>
  )
}

export default withRouter(EditDragQueen)
