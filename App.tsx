import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import TodoList from "./src/components/TodoList";
import TodoInput from "./src/components/TodoInput";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <RecoilRoot>
      <View style={styles.container}>
        <TodoList />
        <TodoInput />
        <StatusBar style="auto" />
      </View>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
