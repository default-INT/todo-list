import { ITodo } from "../../types";

export type TodoStateType = {
  todos: Array<ITodo>,
  isLoading: boolean,
  error: null | string
}

export type TodoContextType = {
  fetchTodo?: () => void,
  addTodo?: (todo : ITodo) => void,
  updateTodo?: (todo: ITodo) => void,
  deleteTodo?: (todoId: string) => void
} & TodoStateType;
