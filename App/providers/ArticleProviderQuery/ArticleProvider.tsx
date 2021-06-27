import { QueryClient } from "react-query";
import React, { ReactNode } from "react";
import ArticleContext from "./ArticleContext";
import { useArticles } from "./hooks";
import { IArticle } from "../../types";

export const ArticleProvider : React.FC<ReactNode> = ({children}) => {
  const {data} = useArticles();
  console.log(data);
  return (
    <ArticleContext.Provider
      value={{
        articles: data ?? []
      }}
    >
      {children}
    </ArticleContext.Provider>
  )
}
