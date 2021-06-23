import React from "react";

import { EditTodoProps } from "../../navigation/types";
import EditTodoScreenView from "./EditTodoScreenView";


const EditTodoScreenContainer : React.FC<EditTodoProps> = ({navigation, route}) => {
  // route.params.todoId TODO: remember!
  return (
    <EditTodoScreenView
    />
  )
}

export default EditTodoScreenContainer;
