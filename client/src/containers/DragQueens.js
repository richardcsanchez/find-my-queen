import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../components/DragQueensStyling.css'
import { getDragQueens } from '../actions/dragQueens'
import DragQueenGrid from '../components/DragQueenGrid'
import SearchBar from '../components/SearchBar'

export class DragQueens extends Component {
  constructor(props){
    super(props)
      this.state = {
        filterText: ""
      }
      this.handleFilterTextChange=this.handleFilterTextChange.bind(this)
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    })
  }

  componentDidMount() {
    this.props.getDragQueens()
  }

  render() {
    return (
      <div>
        <h2>Drag Queens:</h2>
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}/>

          <div className='DragQueensContainer'>
            <DragQueenGrid dragQueens={this.props.dragQueens} filterText={this.state.filterText}/>
          </div>
      </div>
    )
   }
  }

const mapStateToProps = state => {
  return ({
    dragQueens: state.dragQueens
  })
}

export default connect(mapStateToProps, { getDragQueens })(DragQueens);
