import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Todos({ item, handleItemPress }) {
  return (
    <TouchableOpacity onPress={handleItemPress(item.key)}>
      <Text style={styles.item}>{item.text} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    fontSize: 25,
    fontWeight: "200",
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    marginVertical: 10,
    paddingVertical: 10,
    paddingLeft: 10,
  },
});
