import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
} from "react-native";
import { useRecoilState } from "recoil";
import { todoState } from "./../recoil/todo";

export default function TodoInput() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useRecoilState(todoState);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TextInput
        style={{
          width: "80%",
          height: 40,
          borderColor: "black",
          borderWidth: 1,
        }}
        onChange={(e) => {
          setText(e.nativeEvent.text);
        }}
        onSubmitEditing={() => {
          setTodos(
            todos.concat({ id: todos.length + 1, text, checked: false })
          );
          setText("");
        }}
        value={text}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
