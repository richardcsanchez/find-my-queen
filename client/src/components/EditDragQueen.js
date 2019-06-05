import React from 'react';
import EditDragQueens from "../containers/EditDragQueen"
import { connect } from 'react-redux';
import { editDragQueen } from '../actions/dragQueens'

const EditDragQueen = (props) => {

  
    const dragQueen = props.location.state.dragQueen


          const handleOnChange = e => {
            const { name, value } = e.target;
            dragQueen.setState({
              ...dragQueen,
                [name]: value
            })
          }

        const handleOnSubmit = e => {
            this.editDragQueen(dragQueen)

            }


            return (
              <div>
              <br></br>
              <p>Edit {dragQueen.name}</p>
                <form onSubmit={dragQueen.handleOnSubmit}>
                    <label>
                    Name:
                      <br></br>
                    <input
                      type="text"
                      name="name"
                      placeholder="Drag Queen Name"
                      onChange={dragQueen.handleOnChange}
                      defaultValue = {dragQueen.name}
                      />
                      </label><br></br>
                    Hometown:
                      <br></br>
                      <label>
                    <input
                      type='text'
                      name='hometown'
                      placeholder='Hometown'
                      onChange={dragQueen.handleOnChange}
                      defaultValue={dragQueen.hometown}
                      />
                        </label><br></br>
                      Style:
                        <br></br>
                        <label>
                      <input
                        type='text'
                        name='style'
                        placeholder='Drag Style'
                        onChange={dragQueen.handleOnChange}
                        defaultValue={dragQueen.style}
                        />
                          </label><br></br>
                        Bio:
                          <br></br>
                          <label>
                      <input
                        type='text'
                        name='bio'
                        placeholder='Bio'
                        onChange={dragQueen.handleOnChange}
                        defaultValue={dragQueen.bio}
                        />
                          </label><br></br>
                          <br></br>
                          <br></br>

                            <label>
                          <img src={dragQueen.img_url}/>
                          <br></br>
                          <br></br>

                          Image Link:
                            <br></br>
                          <input
                            type='text'
                            name='img_url'
                            placeholder='Image URL'
                            onChange={dragQueen.handleOnChange}
                            defaultValue={dragQueen.img_url}
                            />
                              </label><br></br>
                      <input type='submit' />
                    </form>
                  </div>
            )
          }


        const mapStateToProps = state => {
          return {
            dragQueen: state.dragQueen
          }
        }


        export default connect(mapStateToProps, { editDragQueen } )(EditDragQueen);
