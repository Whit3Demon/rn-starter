import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return(
    <View>
    <ImageDetail tittle="For1est" imageSource = {require("../../assets/forest.jpg")} scoreCount = "10"/>
    <ImageDetail tittle="Mountain" imageSource = {require("../../assets/mountain.jpg")} scoreCount = "10"/>
    <ImageDetail tittle="Snow" imageSource = {require("../../assets/forest.jpg")} scoreCount = "10"/>
    <ImageDetail tittle="Beach" imageSource = {require("../../assets/beach.jpg")} scoreCount = "10"/>
    </View>
  )
};
 
const styles = StyleSheet.create({});
export default ImageScreen;