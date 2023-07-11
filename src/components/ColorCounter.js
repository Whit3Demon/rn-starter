import React, {useState} from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const ColorCounter = ({color, onIncrease, onDecrease}) => {
  const moreButtonText = "Increase " + color
  const lessButtonText = "Decrease " + color
  return(
    <View>
    <Text>{color}</Text>
    <Button 
    onPress={()=> onIncrease()}
    title = {moreButtonText}/>
    <Button 
    onPress={()=> onDecrease()}
    title= {lessButtonText}/>
    </View>
  )
}

const styles = StyleSheet.create({})
export default ColorCounter;