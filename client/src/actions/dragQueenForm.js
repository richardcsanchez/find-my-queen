export const updateDragQueenFormData = dragQueenFormData => {
  return {
    type: 'UPDATED_DATA',
    dragQueenFormData
  }
}

export const resetForm = () => {
    return {
      type: 'RESET_FORM'
    }
  }
