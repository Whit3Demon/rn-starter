import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', age: 40 },
    { name: 'Friend #2', age: 40 },
    { name: 'Friend #3', age: 40 },
    { name: 'Friend #4', age: 40 },
    { name: 'Friend #5', age: 40 },
    { name: 'Friend #6', age: 40 }
  ]
  return (
    <FlatList
      //horizontal
      //showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name} {item.age}</Text>
      }}
    />
  )
}

const styles = StyleSheet.create({
  textStyle: {
    //marginVertical: 50
    
  }
});
export default ListScreen;