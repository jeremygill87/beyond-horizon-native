import React, { Component } from "react";
import { View, Alert, Text } from "react-native";

import { setFighter } from "../actions";

import moves_data from "../data/Moves_Data";

class FighterSelectionScreen extends Component {
  state = {
    is_loading: false,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { selected_fighter } = this.props;
    return (
      <View
        style={{
          flexDirection: "row",
          height: 100,
          padding: 20,
        }}
      >
        <View style={{ backgroundColor: "blue", flex: 0.3 }} />
        <View style={{ backgroundColor: "red", flex: 0.5 }} />
        <Text>Hello World!</Text>
      </View>
    );
  }
}

export default FighterSelectionScreen;
