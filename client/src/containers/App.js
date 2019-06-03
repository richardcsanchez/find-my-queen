import React, {Component} from 'react';
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import DragQueenGrid from '../components/DragQueenGrid'
import DragQueenCard from '../components/DragQueenCard'
import NewDragQueenForm from '../components/NewDragQueenForm'



class App extends Component {

  render() {
    return (
      <div className="App">
        Find My Queen!
        <Router>
          <Switch>
          <Route exact path = '/drag_queens' component={DragQueenGrid} />
          <Route exact path = '/drag_queens/new' component={NewDragQueenForm} />
          <Route exact path = '/drag_queens/:id' component={DragQueenCard}/>
        </Switch>
      </Router>

      </div>
    );
  }
}

export default App;
