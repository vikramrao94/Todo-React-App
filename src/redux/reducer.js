import * as actions from './actions'

const defaultState = {
    toDo: []
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case actions.ADD_ITEM: {
          let todo = state.toDo;
          todo.push(action.item);
          return {
            ...state,
            toDo: todo
          }
        }

        case actions.DELETE_ITEM: {
          let todo = state.toDo;
          todo.splice(action.index,1);
          return {
            ...state,
            toDo: todo
          }
        }

        default:
            return state
    }
}

export default reducer
