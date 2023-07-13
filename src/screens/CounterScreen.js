import React, { useState, useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {...state, count: state.count + action.payload}
    case 'dicrement':
      return {...state, count: state.count - action.payload}
    default:
      return state
  }
}

const CounterScreen = () => {
  //const [counter, setCounter] = useState(0)

  const [counter, dispatch] = useReducer(reducer, { count: 0 })
  return (
    <View>
      <Button title="Increase" onPress={() => dispatch({ type: 'increment', payload: 1 })} />
      <Button title="Decrease" onPress={() => dispatch({ type: 'dicrement', payload: 1 })} />
      <Text>Current Count: {counter.count}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
export default CounterScreen;