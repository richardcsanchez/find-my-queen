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
            e.preventDefault()
            dragQueen.editDragQueen(this.state.dragQueen)
            }


            return (
              <div>
              <p>Add Drag Queen</p>
                <form onSubmit={dragQueen.handleOnSubmit}>
                    <label>
                    Name:
                      <br></br>
                    <input
                      type="text"
                      name="name"
                      placeholder="Drag Queen Name"
                      onChange={dragQueen.handleOnChange}
                      value = {dragQueen.name}
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
                      value={dragQueen.hometown}
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
                        value={dragQueen.style}
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
                        value={dragQueen.bio}
                        />
                          </label><br></br>
                            <label>
                          Image Link:
                            <br></br>
                          <input
                            type='text'
                            name='img_url'
                            placeholder='Image URL'
                            onChange={dragQueen.handleOnChange}
                            value={dragQueen.img_url}
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
