import { useQuery } from "react-query";
import { IArticle } from "../../types";
import axios from "axios";

const fetchArticles = async () => {
  const {data} = await axios.get('/articles.json');

  const articles : Array<IArticle> = Object.keys(data).map(key => ({
    ...data[key],
    id: key
  }))
  return articles;
}

export const useArticles = () => {
  return useQuery<Array<IArticle>>('articles',
    fetchArticles, {
    cacheTime: 100
  });
}
