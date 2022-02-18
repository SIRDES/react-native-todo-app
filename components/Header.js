import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Header(props) {
  return (
    <View style={styles.container}>

      <Text style={styles.text}>Todo App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 10,
    backgroundColor: "coral",
  },
  text: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "400",
    textAlign: "center"
  },
});
