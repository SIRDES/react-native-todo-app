import React, { useState } from "react";
import { TextInput, StyleSheet, Text, Button, View } from "react-native";

export default function AddItem({ handleAddItem }) {
  const [text, setText] = useState("");

  const handleChange = (val) => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        placeholder="New item..."
        style={styles.input}
        onChangeText={handleChange}
        value={text}
      />
      <Button
        title="Add item"
        color="coral"
        onPress={handleAddItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 8,
    paddingHorizontal: 5,
  },
});
