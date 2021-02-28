import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import {Audio} from 'expo-av';

class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
      <Text style={styles.text}> Quiz Buzzer App </Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'blue',
  },
  text:{
    color: 'white',
    padding: 20,
    forntSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default AppHeader;