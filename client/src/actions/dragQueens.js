import { resetForm } from './formReset';

export const setDragQueens = dragQueens => {
  return {
    type: 'GET_DRAG_QUEENS',
    dragQueens: dragQueens
  }
}

export const addDragQueen = (dragQueen) => {
  return {
    type:'ADD_DRAG_QUEEN',
    dragQueen
  }
}

export const removeDragQueen = dragQueen => {
  return {
    type: 'REMOVE_DRAG_QUEEN',
    dragQueen: dragQueen
  }
}

export const getDragQueens = () => {
  return dispatch => {
    const url = 'http://localhost:3001/api/drag_queens'
    return fetch(url, {
      method: 'GET,'
    })
    .then(res => res.json())
    .then(dragQueens => {
      dispatch(setDragQueens(dragQueens))
    })
  }
}


export const createDragQueen = dragQueen => {
  return dispatch => {
    return fetch('http://localhost:3001/api/drag_queens', {
      method: 'POST',
      body: JSON.stringify({dragQueen: dragQueen})
    })
    .then(response => response.json())
    .then(dragQueen => {
      dispatch(addDragQueen(dragQueen))
      dispatch(resetForm())
    })
  }
}

export const deleteDragQueen = (dragQueenId) => {
  return dispatch => {
    return fetch(`'http://localhost:3001/api/${dragQueenId}`, {
      method: "DELETE",
    })
    .then(response => {
      dispatch(removeDragQueen(dragQueenId))
    })
  }
}
