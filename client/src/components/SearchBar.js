import React from 'react'

export default class SearchBar extends React.Component{
  constructor(props){
    super(props)
    this.handleFilterTextChange=this.handleFilterTextChange.bind(this)
  }

  handleFilterTextChange(e){
    this.props.onFilterTextChange(e.target.value)
  }

  render(){
    const filterText=this.props.filterText

    return(
      <div>
        <p>Search By Name</p>
          <form>
            <input type="text"
              placeholder="Search..."
              value={this.props.filterText}
              onChange={this.handleFilterTextChange}/>
          </form>
        </div>
    )
  }
}
