import React, { useContext } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import {IArticle} from "../../types";
import TodoContext from "../../providers/TodoProvider/TodoContext";
import { TodoContextType } from "../../providers/TodoProvider/types";
import ArticleContext from "../../providers/ArticleProviderQuery/ArticleContext";
import { ArticleContextType } from "../../providers/ArticleProvider/types";
import { Colors } from "../../config";

type ArticleProps = {
  articles: Array<IArticle>
}

const ArticleOverviewScreenView : React.FC = (props) => {
  const {articles} = useContext(ArticleContext) as ArticleContextType ;
  console.log(articles);
  return (
    <View>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <View style={styles.article}>
            <Text style={{fontWeight: 'bold', paddingBottom: 10}}>{item.name}</Text>
            <Text>{item.description}</Text>
          </View>
        ) }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  article: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 20,
    marginBottom: 2,
    backgroundColor: Colors.whitesmoke
  }
})

export default ArticleOverviewScreenView;
