
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default class ProposeFood extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <Text> Đề xuất món ăn </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});
