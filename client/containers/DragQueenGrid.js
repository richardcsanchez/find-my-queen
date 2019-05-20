import React from 'react';
import { DragQueenCard } from '../components/DragQueenCard'
import { connect } from 'react-redux'

class DragQueenGrid extends React.Component {


  sortByName = (a, b) => {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1
    return 0
  }

  render(){
    const dr
  }
}
