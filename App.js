import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/Header";
import AddItem from "./components/AddItem";
// import Sandbox from "./components/Sandbox";
import { MaterialIcons } from "@expo/vector-icons";
export default function App() {
  const [text, setText] = useState("");

  const handleChange = (val) => {
    setText(val);
  };

  const [todos, setTodos] = useState([
    { text: "Do washing", key: 1 },
    { text: "Clean living room", key: 2 },
    { text: "Take my bath", key: 3 },
    { text: "Eat breakfast", key: 4 },
    { text: "Write some codes", key: 5 },
  ]);

  const handleItemPress = (key) => {
    setTodos((prevTodo) => prevTodo.filter((item) => item.key !== key));
  };

  const handleAddItem = (text) => {
    if (text.length >= 3) {
      setTodos((prevTodos) => [
        { text: text, key: Math.random().toString() },
        ...prevTodos,
      ]);
      setText("");
    } else {
      Alert.alert("Warning", "Text length should be more than two characters", [
        { text: "understood", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  return (
    
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          {/* todos form */}
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
              onPress={() => handleAddItem(text)}
            />
          </View>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleItemPress(item.key)}>
                  <View style={styles.item}>
                    <MaterialIcons name="delete" size={23} color="#333" />
                    <Text
                      style={{ marginLeft: 10, fontSize: 24, fontWeight: "200" }}
                    >
                      {item.text}{" "}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#ccc",
    // alignItems: "center",
    // justifyContent: "center",
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    marginTop: 20,
    paddingBottom: 20,
    // backgroundColor: "#ccc",
  },
  list: {
    flex: 1,
    marginTop: 20,
    // backgroundColor: "red"
  },
  item: {
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    marginVertical: 10,
    paddingVertical: 10,
    paddingLeft: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  input: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 8,
    paddingHorizontal: 5,
  },
});
