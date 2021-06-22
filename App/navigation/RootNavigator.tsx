import React from "react";
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";

import { TodoStackParamList } from "./types";
import { EditTodoScreen, TodoOverviewScreen } from "../screens";
import { Colors } from "../config";


const defaultStackOptions : StackNavigationOptions = {
  headerStyle: {
    backgroundColor: Colors.white
  },
  cardStyle: {
    backgroundColor: Colors.white
  }
};


const TodoStackNavigator = createStackNavigator<TodoStackParamList>()

const TodoNavigator = () => {
  return (
    <TodoStackNavigator.Navigator
      screenOptions={defaultStackOptions}
    >
      <TodoStackNavigator.Screen
        name='TodoOverview'
        component={TodoOverviewScreen}
      />
      <TodoStackNavigator.Screen
        name='EditTodoScreen'
        component={EditTodoScreen}
      />
    </TodoStackNavigator.Navigator>
  )
};

export default TodoNavigator;
