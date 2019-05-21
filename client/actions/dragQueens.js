import { resetEventForm } from './eventForm';

export const setDragQueens = dragQueens => {
  return {
    type: 'GET_DRAG_QUEENS',
    dragQueens
  }
}

export const addDragQeen = dragQueen => {
  return {
    type:'ADD_DRAG_QUEEN'
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
    const url = 'api/drag_queens'
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
    return fetch('api/drag_queens', {
      method: 'POST',
      body: JSON.stringify({dragQueen: dragQueen})
    })
    .then(response => response.json())
    .then(dragQueen => {
      dispatch(addDragQueen(dragQueen))
      dispatch(resetEventForm())
    })
  }
}

export const deleteDragQueen = (dragQueenId) => {
  return dispatch => {
    return fetch(`api/drag_queens/${dragQueenId}`, {
      method: "DELETE",
    })
    .then(response => {
      dispatch(removeDragQueen(dragQueenId))
    })
  }
}s
