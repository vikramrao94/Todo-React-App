export const ADD_ITEM = Symbol('ADD_ITEM')
export const DELETE_ITEM = Symbol('DELETE_ITEM')

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    item: item
  }
}

export const deleteItem = (index) => {
  return {
    type: DELETE_ITEM,
    index: index
  }
}
