export default (state = [], action) => {
    switch (action.type) {
      case 'GET_DRAG_QUEENS':
        return action.dragQueens;
      case 'ADD_DRAG_QUEEN' :
        return state.concat(action.dragQueens);
      case 'REMOVE_DRAG_QUEEN':
        return {dragQueens: state.dragQueens.filter(dragQueen => dragQueen.id !== action.dragQueen)}

      default:
        return state;
    }
  }
