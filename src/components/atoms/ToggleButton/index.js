import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';

export default function App({title, onPress, children}) {
  return (
    <View style={styles.container} onTouchStart={onPress}>
      <View style={styles.iconContainer}>{children}</View>
      <Text style={styles.label}>{title}</Text>
    </View>
  );
}
