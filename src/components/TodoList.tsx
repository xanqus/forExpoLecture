import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TodoItem from "./TodoItem";
import { useRecoilValue } from "recoil";
import { todoState } from "../recoil/todo";

export default function TodoList() {
  const datas = useRecoilValue(todoState);
  return (
    <View style={styles.container}>
      {datas.map((data: any) => {
        return <TodoItem key={data.id} data={data} />;
      })}
    </View>
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
