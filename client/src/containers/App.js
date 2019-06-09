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
import { connect } from 'react-redux';
import { getDragQueens } from '../actions/dragQueens'
import DragQueens from '../containers/DragQueens'
import DragQueenCard from '../components/DragQueenCard'
import NewDragQueenForm from '../components/NewDragQueenForm'
import NavBar from '../components/NavBar'
import EditDragQueen from './EditDragQueen.js'
import EditingDragQueen from './EditingDragQueen'

class App extends Component {

  componentDidMount() {
    this.props.getDragQueens()
  }
  render() {
    const { dragQueens, match } = this.props;

    return (
      <div className="App">
        <Router>
        <div>
        <h1>Find My Queen!</h1>
        <NavBar />

          <Switch>
          <Route exact path = '/drag_queens' component={DragQueens} />
          <Route  path ='/drag_queens/new' component={NewDragQueenForm} />
          <Route  path='/drag_queens/:id/edit' component={EditDragQueen} />
          <Route path='/drag_queens/:id' component={DragQueenCard} />
          <Route render={() => (<div> Sorry, this page does not exist. </div>)} />
        </Switch>
        </div>
      </Router>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    dragQueens: state.dragQueens
  })
}


export default connect(mapStateToProps, {getDragQueens})(App)
