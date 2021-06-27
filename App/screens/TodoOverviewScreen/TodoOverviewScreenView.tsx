import React, { useContext } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { TodoContextType } from "../../providers/TodoProvider/types";
import TodoContext from "../../providers/TodoProvider/TodoContext";
import { Colors } from "../../config";

const TodoOverviewScreenView = (props : any) => {
  const {todos} = useContext(TodoContext) as TodoContextType ;

  return (
    <View>
      <Button title={'To articles'} onPress={props.goToArticleScreen} />
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <View style={styles.article}>
            <Text>{item.title}</Text>
            <Text>{item.completed ? 'Completed!' : 'Not complete'}</Text>
          </View>
        ) }
      />
    </View>
  )
};

const styles = StyleSheet.create({
  article: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    marginBottom: 2,
    backgroundColor: Colors.whitesmoke
  }
})

export default TodoOverviewScreenView;
