import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ArticleProvider } from "./ArticleProvider";



export const ArticleProviderQuery : React.FC<ReactNode> = ({children}) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ArticleProvider>
        {children}
      </ArticleProvider>
    </QueryClientProvider>
  )
}

