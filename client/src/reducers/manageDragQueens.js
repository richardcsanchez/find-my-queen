export default (state = [], action) => {
    switch (action.type) {
      case 'GET_DRAG_QUEENS':
        return action.dragQueens;
      case 'ADD_DRAG_QUEEN' :
        return state.concat(action.dragQueen);
      case 'REMOVE_DRAG_QUEEN':
        return state.filter(dragQueen => dragQueen.id !== action.id)

      default:
        return state;
    }
  }
