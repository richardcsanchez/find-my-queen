import { resetForm } from './dragQueenForm';

//Action Creators
export const setDragQueens = dragQueens => {
  return { type: 'GET_DRAG_QUEENS', dragQueens: dragQueens }
}

export const addDragQueen = dragQueen => {
  return {
    type:'ADD_DRAG_QUEEN',
    dragQueen
  }
}

export const removeDragQueen = dragQueen => {
  return {
    type: 'REMOVE_DRAG_QUEEN',
    dragQueen
  }
}


//Async Actions
export const getDragQueens = () => {
  return dispatch => {
    return fetch('http://localhost:3001/api/drag_queens')
    .then(res => res.json())
    .then(dragQueens => dispatch(setDragQueens(dragQueens)))
    }
  }



export const createDragQueen = (dragQueen) => {
  return dispatch => {
    return fetch('http://localhost:3001/api/drag_queens', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dragQueen)
    })
    .then(response => response.json())
    .then(dragQueen => {
      dispatch(addDragQueen(dragQueen))
      dispatch(resetForm())
    })
  }
}

export const deleteDragQueen = (dragQueen) => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/drag_queens/${dragQueen}`, {
      method: "DESTROY",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dragQueen)
    })
    .then(response => response.json())
    .then(dragQueen => {
      dispatch(removeDragQueen(dragQueen))
    })
  }
}
