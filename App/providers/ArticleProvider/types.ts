import { IArticle } from "../../types";

export type ArticleStateType = {
  articles: Array<IArticle>
}

export type ArticleContextType = {
  fetchArticles?: () => void
} & ArticleStateType;
