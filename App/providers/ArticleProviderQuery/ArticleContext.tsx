import { createContext } from "react";
import { ArticleStateType } from "./types";

const ArticleContext = createContext<ArticleStateType | null>(null);

export default ArticleContext;
