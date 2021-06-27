import { createContext } from "react";
import { TodoContextType } from "./types";

const TodoContext = createContext<TodoContextType | null>(null);

export default TodoContext;
