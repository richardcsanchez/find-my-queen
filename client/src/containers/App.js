import React, {Component} from 'react';
import "./App.css"
import 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import DragQueenGrid from '../components/DragQueenGrid'
import DragQueenCard from '../components/DragQueenCard'
import NewDragQueenForm from '../components/NewDragQueenForm'
import NavBar from '../components/NavBar'
import Nav from 'react-bootstrap/Nav'


class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
        <div>
        <h1>Find My Queen!</h1>
        <NavBar />

          <Switch>
          <Route exact path = '/drag_queens' component={DragQueenGrid} />
          <Route exact path = '/drag_queens/new' component={NewDragQueenForm} />
          <Route exact path = '/drag_queens/:id' component={DragQueenCard}/>
        </Switch>
        </div>
      </Router>

      </div>
    );
  }
}

export default App;
