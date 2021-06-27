import { ITodo } from "../../types";

export const addTodo = (todo: ITodo) => {
  return {
    type: 'ADD_TODO',
    payload: todo
  };
}

export const  deleteTodo = (todoId : string) => {
  return {
    type: 'DELETE_TODO',
    payload: todoId
  };
}

export const updateTodo = (todo : ITodo) => {
  return {
    type: 'UPDATE_TODO',
    payload: todo
  }
}
