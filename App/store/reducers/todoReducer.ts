import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {RootState} from "../store";
import {ITodo} from "../../types";

interface TodoState {
    todos: Array<ITodo>
}

const initialState : TodoState = {
    todos: []
}

