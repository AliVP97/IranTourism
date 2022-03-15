import React from 'react';
import {View} from 'react-native';
import ButtonGroup from '../../molcules/ButtonGroup';
import {buttons} from './const';

import styles from './style';

export default function App() {
  return (
    <View style={styles.container}>
      <ButtonGroup buttons={buttons} />
    </View>
  );
}
