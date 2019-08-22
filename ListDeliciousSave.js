import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class ListDeliciousSave extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <Text> Danh sách món ngon đã lưu </Text>
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
