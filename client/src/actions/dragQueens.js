
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

export const updateDragQueen = dragQueen => {
  return {
    type: 'UPDATE_DRAG_QUEEN',
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
    return fetch('/api/drag_queens')
    .then(res => res.json())
    .then(dragQueens => dispatch(setDragQueens(dragQueens)))
    }
  }

export const createDragQueen = (dragQueen, routerHistory) => {
  return dispatch => {
    return fetch('/api/drag_queens', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dragQueen)
    })
    .then(response => response.json())
    .then(dragQueen => {
      dispatch(addDragQueen(dragQueen))
    })
  }
}

export const deleteDragQueen = (dragQueen) => {
  return dispatch => {
    return fetch(`/api/drag_queens/${dragQueen}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(dispatch(removeDragQueen(dragQueen)))
    .then(window.location.href = "/drag_queens")
  }
}
