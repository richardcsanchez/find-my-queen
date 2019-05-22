import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import CreateDragQueen from './components/CreateDragQueen'
import DragQueen from './components/DragQueen'

import manageDragQueens from './reducers/manageDragQueens';



class App extends Component {
  render() {
    return (
      <div className="App">
        Find My Queen!
        <CreateDragQueen />
        <DragQueen />
      </div>
    );
  }
}

export default App;
