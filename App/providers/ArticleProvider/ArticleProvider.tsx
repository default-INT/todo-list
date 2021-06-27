import React, { useEffect, useReducer } from "react";
import ArticleContext from "./ArticleContext";
import { articleReducer } from "./articleReducer";
import { ArticleStateType } from "./types";
import axios from "axios";
import { IArticle, ITodo } from "../../types";

const initialState : ArticleStateType = {
  articles: []
}

const ArticleProvider : React.FC<React.ReactNode> = ({children}) => {
  const [state, dispatch] = useReducer(articleReducer, initialState);

  useEffect(() => {
    console.log(state);
    console.log('mounte articles');
    fetchArticles();
    return () => {
      console.log(state);
      console.log('unmounte articles')
    }
  }, []);


  const fetchArticles = async () => {
    try {
      const response = await axios.get('/articles.json');
      const articles : Array<IArticle> = Object.keys(response.data).map(key => ({
        ...response.data[key],
        id: key
      }))
      dispatch({type: 'FETCH_ARTICLES', payload: articles});
      dispatch({type: 'FETCH_TODO', payload: articles});
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <ArticleContext.Provider
      value={{
        articles: state.articles
      }}
    >
      {children}
    </ArticleContext.Provider>
  )
}

export {ArticleProvider};
