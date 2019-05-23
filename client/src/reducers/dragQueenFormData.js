const initialState = {
  name: '',
  city: '',
  style: '',
  bio: '',
  img_url: ''
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'RESET_FORM':
            return initialState;
        case 'UPDATED_DATA':
            return action.dragQueenFormData

        default:
            return state;
    }
}
