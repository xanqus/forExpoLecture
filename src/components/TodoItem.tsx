import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRecoilState } from "recoil";
import { todoState } from "../recoil/todo";

export default function TodoItem({ data }: any) {
  const [todos, setTodos] = useRecoilState(todoState);

  const toggleChecked = () => {
    setTodos(
      todos.map((todo) => {
        return todo.id === data.id ? { ...todo, checked: !data.checked } : todo;
      })
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          flex: 1,
          height: 35,
          borderColor: "aqua",
          borderWidth: 0.5,
          justifyContent: "center",
        }}
        onPress={toggleChecked}
      >
        <Text
          style={
            data.checked
              ? { textDecorationLine: "line-through" }
              : { textDecorationLine: "none" }
          }
        >
          {data.text}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: 35,
          height: 35,
          justifyContent: "center",
          alignItems: "center",
          borderColor: "aqua",
          borderWidth: 0.5,
        }}
        onPress={() => {
          setTodos((todos) => todos.filter((todo) => todo.id !== data.id));

          //console.log(todos.filter((todo) => todo.id !== data.id));
        }}
      >
        <Text>X</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "80%",
    height: 35,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
