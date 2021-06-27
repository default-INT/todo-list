import React from "react";

import TodoOverviewScreenView from "./TodoOverviewScreenView";
import { TodoOverviewProps } from "../../navigation/types";
import { TodoProvider } from "../../providers";
import { QueryCache } from "react-query";

const TodoOverviewScreenContainer  : React.FC<TodoOverviewProps> = ({navigation, route}) => {
  const goToArticleScreen = () => {
    navigation.navigate('ArticlesOverview');
  }

  return (
    <TodoProvider>
      <TodoOverviewScreenView
        goToArticleScreen={goToArticleScreen}
      />
    </TodoProvider>
  )
}

export default TodoOverviewScreenContainer;
