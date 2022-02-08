import React, { Component } from "react";
import { View, Text } from "react-native";

class Test extends Component {
  render() {
    return (
      <View style={styles.bubbles}>
        <Text>Hello World!</Text>
      </View>
    );
  }
}

const styles = {
    bubbles: {
        flex: 2
    }
}
export default Test;
