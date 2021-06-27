import React, { useEffect, useReducer } from "react";
import TodoContext from "./TodoContext";
import { ITodo } from "../../types";
import { todoReducer } from "./todoReducer";
import { TodoStateType } from "./types";
import axios from "axios";


const initialState : TodoStateType = {
  todos: [],
  isLoading: false,
  error: null
};

const TodoProvider : React.FC<React.ReactNode> = ({children}) => {

  const [state, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    console.log('mounte todo');
    fetchTodo();
    return () => {
      console.log('unmounte todo');
    }
  }, []);


  const fetchTodo = async () => {
    try {
      const response = await axios.get('/todos.json');
      const todos : Array<ITodo> = Object.keys(response.data).map(key => ({
        ...response.data[key],
        id: key
      }))
      dispatch({type: 'FETCH_TODO', payload: todos})
    } catch (err) {
      console.error(err.message);
    }
  }

  const addTodo = (todo: ITodo) => {
    // async req
    // dispatch({type: REMOVE_TODO, payload: _todo})
    return todo;
  }

  const deleteTodo = (todoId : string) => {

  }

  const updateTodo = (todo : ITodo) => {

  }

  return (
    <TodoContext.Provider value={{
      todos: state.todos,
      isLoading: state.isLoading,
      error: state.error,
      addTodo,
      deleteTodo,
      updateTodo,
      fetchTodo
    }}>
      {children}
    </TodoContext.Provider>
  )
}

export {TodoProvider};
