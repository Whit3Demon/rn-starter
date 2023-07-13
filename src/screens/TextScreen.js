import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const TextScreen = () => {
  const [name, setName] = useState('')
  return (
    <View>
      <TextInput
      style={styles.input}
      autoCapitalize= "none"
      autoCorrect = {false}
      value={name}
      onChangeText={(newValue) => setName(newValue) }
      />
      <Text> My name is {name}</Text>

      {name.length > 5 ? null : <Text>Нужно миниимум 5 символов</Text>}
      
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    color: "black",
    borderWidth: 1

  }
});
export default TextScreen;