import React from "react";
import { NativeBaseProvider, Box } from "native-base";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

// screen
import Calculator from "./src/screen/Calculator";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box>Hello world</Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});
