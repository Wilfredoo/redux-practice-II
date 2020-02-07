import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

class AddTodo extends Component {
  render() {
    return (
      <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
        <TextInput placeholder="do something now!" style={styles.input} />
        <TouchableOpacity onPress={() => alert("added todo")}>
          <View style={{ height: 50, backgroundColor: "#eaeaea" }}>
            <Ionicons name="md-add" size={27.5} style={styles.plusIcon} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default AddTodo;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    borderWidth: 1,
    borderLeftColor: "rosybrown",
    borderTopColor: "rosybrown",
    borderBottomColor: "rosybrown",
    borderRightColor: "#eaeaea",
    backgroundColor: "#eaeaea",
    height: 50,
    flex: 1,
    padding: 5
  },
  plusIcon: {
    color: "rosybrown",
    padding: 10,
    borderWidth: 1,
    borderRightColor: "rosybrown",
    borderLeftColor: "#eaeaea",
    borderTopColor: "rosybrown",
    borderBottomColor: "rosybrown"
  }
});
