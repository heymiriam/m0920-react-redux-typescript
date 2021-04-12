import { ActionTypes, Todo, Action } from '../actions'

export const todosReducer = (state: Todo[] = [], action: Action ) => {
    switch(action.type){
        case ActionTypes.fetchTodos:
            return action.payload
        case ActionTypes.clearTodos:
            return []
        default:
            return state
    }
}