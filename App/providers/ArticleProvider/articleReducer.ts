import { ArticleStateType } from "./types";
import { Actions } from "../types";
import { ITodo } from "../../types";

const handlers : any = {
  ['FETCH_ARTICLES']: (state : ArticleStateType, {payload} : Actions<Array<ITodo>>) => ({
    ...state,
    articles: payload
  }),
  DEFAULT : (state : ArticleStateType) => state
}

export const articleReducer = (state : ArticleStateType, action : any) => {
  const handle = handlers[action.type] || handlers.DEFAULT
  return handle(state, action)
}
