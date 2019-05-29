import React, {Component} from 'react';
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import DragQueenForm from '../containers/DragQueenForm'
import DragQueenGrid from '../components/DragQueenGrid'
import DragQueensContainer from './dragQueensContainer'
import manageDragQueens from '../reducers/manageDragQueens';
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
        </Switch>
      </Router>

      </div>
    );
  }
}

export default App;
