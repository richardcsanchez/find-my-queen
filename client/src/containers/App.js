import React, {Component} from 'react';
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import DragQueenForm from '../containers/DragQueenForm'
import DragQueens from '../containers/DragQueens'
import DragQueensContainer from './dragQueensContainer'
import manageDragQueens from '../reducers/manageDragQueens';



class App extends Component {

  render() {
    console.log(this.state)
    return (
      <div className="App">
        Find My Queen!
        <DragQueens />
      </div>
    );
  }
}

export default App;
