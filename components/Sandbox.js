import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Sandbox () {

  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>Three</Text>
      <Text style={styles.boxFour}>Four</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    // height: 200,
    // width: 100,
    paddingTop: 40,
    backgroundColor: "#ddd",
  },
  boxOne: {
    padding: 10,
    backgroundColor: "violet",
  },
  boxTwo: {
    padding: 10,
    backgroundColor: "coral"
  },
  boxThree: {
    padding: 10,
    backgroundColor: "skyblue"
  },
  boxFour: {
    padding: 10,
    backgroundColor: "yellow"
  }
});