import axios from "axios";
import { Constants } from "../../../config";
import { ITodo } from "../../../types";

export const fetchTodos = () => (
  axios.get(Constants.DATABASE_URL)
);

export const addTodo = (todo : ITodo) => (
  axios.post(Constants.DATABASE_URL, todo)
);

export const newTodo = (newTodo : ITodo) => {
  axios.put(Constants.DATABASE_URL, newTodo)
}
