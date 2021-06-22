import React from "react";

import TodoOverviewScreenView from "./TodoOverviewScreenView";
import { TodoOverviewProps } from "../../navigation/types";

const TodoOverviewScreenContainer = ({navigation, route} : TodoOverviewProps) => {
  return (
    <TodoOverviewScreenView />
  )
}

export default TodoOverviewScreenContainer;
