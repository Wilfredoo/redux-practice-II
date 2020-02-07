import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";

class AddTodo extends Component {
  state = {
    text: ""
  };

  addTodo = text => {
    this.props.dispatch({ type: "ADD_TODO", text });
    this.setState({ text: "" });
  };

  render() {
    return (
      <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
        <TextInput
          onChangeText={text => {
            this.setState({ text });
          }}
          placeholder="do something now!"
          style={styles.input}
        />
        <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
          <View style={{ height: 50, backgroundColor: "#eaeaea" }}>
            <Ionicons name="md-add" size={27.5} style={styles.plusIcon} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default connect()(AddTodo);

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
