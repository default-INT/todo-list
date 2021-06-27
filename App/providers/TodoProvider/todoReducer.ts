import { TodoStateType } from "./types";
import { Actions } from "../types";
import { ITodo } from "../../types";

const handlers : any = {
  ['ADD_TODO'] : (state : TodoStateType , {payload} : Actions<ITodo>) => ({
    ...state,
    todos: [...state.todos, payload]
  }),
  ['FETCH_TODO']: (state : TodoStateType, {payload} : Actions<Array<ITodo>>) => ({
    ...state,
    todos: payload
  }),
  ['DELETE_TODO']: (state : TodoStateType, {payload} : any) => ({
    ...state,
    todos: state.todos.filter(todo => todo.id !== payload.id)
  }),
  ['UPDATE_TODO']: (state : TodoStateType, {payload} : any) => ({
    ...state,
    todos: [...state.todos.filter(todo => todo.id !== payload.id), payload]
  }),
  DEFAULT : (state : TodoStateType) => state
}

export const todoReducer = (state : TodoStateType, action : any) => {
  const handle = handlers[action.type] || handlers.DEFAULT
  return handle(state, action)
}
