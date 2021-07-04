import React, { useEffect, useState } from "react";
import axios from "axios";
import { TodoOverviewProps } from "../navigation/types";
import { TodoOverviewViewProps } from "../screens";
import TodoOverviewScreenView from "../screens/TodoOverviewScreen/TodoOverviewScreenView";
import { ITodo } from "../types";
import { StyleSheet } from "react-native";
import compose = StyleSheet.compose;

/**
 * Новый контейнер
 * @param WrapComponent
 */
const fetchHocTodos = (WrapComponent : React.FC<TodoOverviewViewProps>) => {
  return function() {
    const [todos, setTodos] = useState([])
    const fetchTodos = async () => {
      const response = await axios.get('/todos.json');
      setTodos(response.data);
    }
    useEffect(() => {
      fetchTodos();
    }, []);

    return <WrapComponent todos={todos}/>
  }
}

const addHocTodo = (WrapComponent : React.FC<TodoOverviewViewProps>) => {
  return function() {
    const addTodo = (todo : ITodo) => {
      // add async todo
    }
    return <WrapComponent addTodo={addTodo} />
  }
}

// Вариант 1.
// const TodoScreen = addHocTodo(fetchHocTodos(TodoOverviewScreenView));
// Вариант 2.
const TodoScreen = compose<any>(
// wrapTodoProvider
  addHocTodo,
  fetchHocTodos
)(TodoOverviewScreenView);

const App = () => {
  return (
    <TodoScreen/>
  )
}
