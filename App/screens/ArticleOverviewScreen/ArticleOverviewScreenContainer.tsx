import React from "react";
import ArticleOverviewScreenView from "./ArticleOverviewScreenView";
import { ArticleProvider } from "../../providers/ArticleProvider";
import { ArticleProviderQuery } from "../../providers/ArticleProviderQuery";


const ArticleOverviewScreenContainer = (props : any) => {
  return (
    <ArticleProviderQuery>
      <ArticleOverviewScreenView />
    </ArticleProviderQuery>
  )
}

export default ArticleOverviewScreenContainer;
