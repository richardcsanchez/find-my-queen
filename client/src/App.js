import React, {Component} from 'react';
import manageDragQueens from './reducers/manageDragQueens';



class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateDragQueen />
        <DragQueen />
        <DragQueenCard />
      </div>
    );
  }
}

export default App;
