import {createSlice, Draft, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from "../store";
import {ITodo} from "../../types";

interface TodoState {
    todos: Array<ITodo>
}

const initialState : TodoState = {
    todos: []
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        fetchTodos: (state: TodoState , action : PayloadAction<Array<ITodo>>) => {
            state.todos = action.payload;
        },
        addTodo: (state : TodoState, {payload}: PayloadAction<ITodo>) => {
            state.todos.push(payload)
        }
    }
});

export const {fetchTodos, addTodo} = todoSlice.actions;
export default todoSlice.reducer;
