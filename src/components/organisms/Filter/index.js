import React from 'react';
import {View} from 'react-native';
import ToggleButton from '../../molcules/ToggleButton';
import styles from './style';

export default function App() {
  return (
    <View>
      <ToggleButton title="Happy" icon={{name: 'happy', type: 'ionicons'}} />
      <ToggleButton title="Happy" icon={{name: 'happy', type: 'ionicons'}} />
      <ToggleButton title="Happy" icon={{name: 'happy', type: 'ionicons'}} />
      <ToggleButton title="Happy" icon={{name: 'happy', type: 'ionicons'}} />
      <ToggleButton title="Happy" icon={{name: 'happy', type: 'ionicons'}} />
      <ToggleButton title="Happy" icon={{name: 'happy', type: 'ionicons'}} />
    </View>
  );
}
