import {StackScreenProps} from "@react-navigation/stack";
import { TodoOverviewScreen } from "../screens/TodoOverviewScreen";

export type TodoStackParamList = {
  TodoOverview: undefined;
  ArticlesOverview: undefined;
  EditTodoScreen: {todoId: string};
};


export type TodoOverviewProps = StackScreenProps<
  TodoStackParamList,
  "TodoOverview"
>;

export type EditTodoProps = StackScreenProps<
  TodoStackParamList,
  "EditTodoScreen"
>;
