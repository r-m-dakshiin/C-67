import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';




export default class TeamA extends React.Component {
  render() {
    return (
      <View>
        <Text style={{alignSelf:'center', fontSize:70}}>You have voted for TeamA</Text>
      </View>
    );
  }
}