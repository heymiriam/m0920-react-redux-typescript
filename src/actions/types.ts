import { FetchTodosAction, ClearTodosAction } from './todos'

export enum ActionTypes {
    fetchTodos,
    clearTodos,
    
}

export type Action = FetchTodosAction | ClearTodosAction