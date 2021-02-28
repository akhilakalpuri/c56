import * as React from 'react';
import { View } from 'react-native';
import SoundButton from './SoundButton'
import AppHeader from './AppHeader'


export default class App extends React.Component {
  render() {
    return (
      <View>
        <SoundButton/>
        <AppHeader/>
      </View>
    );
  }
}




