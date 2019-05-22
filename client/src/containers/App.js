import React, {Component} from 'react';
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import DragQueenForm from '../containers/DragQueenForm'
import DragQueens from '../containers/DragQueens'
import DragQueensContainer from './dragQueensContainer'
import dragQueens from '../actions/dragQueens'
import manageDragQueens from '../reducers/manageDragQueens';



class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      dragQueens: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/drag_queens')
    .then(res => res.json())
    .then(dragQueens => {
      this.setState({ dragQueens })
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        Find My Queen!
        <DragQueens dragQueens={this.state.dragQueens}/>
      </div>
    );
  }
}

export default App;
