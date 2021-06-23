import React from "react";

import TodoOverviewScreenView from "./TodoOverviewScreenView";
import { TodoOverviewProps } from "../../navigation/types";

const TodoOverviewScreenContainer  : React.FC<TodoOverviewProps> = ({navigation, route}) => {
  return (
    <TodoOverviewScreenView />
  )
}

export default TodoOverviewScreenContainer;
