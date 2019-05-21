import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import CreateDragQueen from './components/CreateDragQueen'


import manageDragQueens from './reducers/manageDragQueens';



class App extends Component {
  render() {
    return (
      <div className="App">
        Hello World
        <CreateDragQueen />
      </div>
    );
  }
}

export default App;
