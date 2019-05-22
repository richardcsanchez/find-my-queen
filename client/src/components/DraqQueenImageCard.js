import React from 'react'
import { Link } from 'react-router-dom'

export const DragQueenImageCard = (props) => {
  const drag_queen_url = '/drag_queens/${props.id}'

  return (
    <div>
      <Link to={drag_queen_url}
        <img src={props.dragQueen.img_url} href={drag_queen_url} alt={this.props.name}/>
      </Link>
      </div>
  )
}
