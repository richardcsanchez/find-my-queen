export default (state = [], action) => {
    switch (action.type) {
      case 'GET_DRAG_QUEENS':
        return action.dragQueens;
      case 'FIND_DRAG_QUEEN':
        return action.dragQueen;
      case 'ADD_DRAG_QUEEN':
        return state.concat(action.dragQueen);
      case 'UPDATE_DRAG_QUEEN':
        state.dragQueen.map((dragQueen) => {
          if (dragQueen.id === action.dragQueen.id) {
            dragQueen.name = action.dragQueen.name;
            dragQueen.hometown = action.dragQueen.hometown;
            dragQueen.style = action.dragQueen.style;
            dragQueen.img_url = action.dragQueen.img_url;
          }
        });
        return {...state, dragQueen: action.dragQueen};
      case 'REMOVE_DRAG_QUEEN':
        return state.filter(dragQueen => dragQueen.id !== action.id)

      default:
        return state;
    }
  }
