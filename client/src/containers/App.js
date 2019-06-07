import React, {Component} from 'react';
import "./App.css"
import 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DragQueens from '../containers/DragQueens'
import DragQueenCard from '../components/DragQueenCard'
import NewDragQueenForm from '../components/NewDragQueenForm'
import NavBar from '../components/NavBar'
import EditDragQueen from './EditDragQueen.js'

class App extends Component {


  render() {
    return (
      <div className="App">
        <Router>
        <div>
        <h1>Find My Queen!</h1>
        <NavBar />

          <Switch>
          <Route exact path = '/drag_queens' component={DragQueens} />
          <Route exact path = '/drag_queens/new' component={NewDragQueenForm} />
          <Route path='/drag_queens/:id/edit' component={EditDragQueen} />
          <Route exact path='/drag_queens/:id' component={DragQueenCard}/>

        </Switch>
        </div>
      </Router>

      </div>
    );
  }
}

export default App;
