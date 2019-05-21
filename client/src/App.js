import React, {Component} from 'react';
import manageDragQueens from '../reducers/manageDragQueens';
import CreateDragQueen from './components/CreateDragQueen'
import DragQueen from './components/DragQueen'
import DragQueenCard from './components/DragQueenCard'


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
