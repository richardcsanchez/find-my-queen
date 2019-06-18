import React, {Component} from 'react';
import "./App.css"
import 'react-bootstrap'
import {
  Route,
  Link,
  Redirect,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';
import DragQueens from '../containers/DragQueens'
import DragQueenCard from '../components/DragQueenCard'
import NewDragQueenForm from '../components/NewDragQueenForm'
import NavBar from '../components/NavBar'
import EditingDragQueen from './EditingDragQueen'

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
                  <Route  path ='/drag_queens/new' component={NewDragQueenForm} />
                  <Route  path='/drag_queens/:id/edit' component={EditingDragQueen} />
                  <Route path='/drag_queens/:id' component={DragQueenCard} />
                  {<Route path="/" /> ? <Redirect to="/drag_queens" /> : null}
                </Switch>
            </div>
      </Router>
    </div>
    )
  }
}

export default (App)
