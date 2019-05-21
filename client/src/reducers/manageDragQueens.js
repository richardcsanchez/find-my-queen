export default function manageDragQueens(state ={
    dragQueens: [],
  }, action) {
    switch (action.type) {
      case 'GET_DRAG_QUEENS':
        return {...state, dragQueens: action.dragQueens};
      case 'ADD_DRAG_QUEEN' :
        return {dragQueens: [...state.dragQueens, action.dragQueen]}
      case 'REMOVE_DRAG_QUEEN':
        return {dragQueens: state.dragQueens.filter(dragQueen => dragQueen.id !== action.dragQueen)}

      default:
      return state;
    }
  }
