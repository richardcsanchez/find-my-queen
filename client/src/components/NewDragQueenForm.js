import React from 'react';
import DragQueenForm from "../containers/DragQueenForm"
import '../components/DragQueensStyling.css'

class NewDragQueenForm extends React.Component {
    render() {
      return (
        <div>
          <h2>Add a Queen</h2>
          <DragQueenForm />
        </div>
      )
    }
  }


export default NewDragQueenForm
