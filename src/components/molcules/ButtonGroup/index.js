import React from 'react';
import {View} from 'react-native';
import ToggleButton from '../../atoms/ToggleButton';
import styles from './style';

/*
    buttons = [

        {
            title: //text in the button *string
            icon: //the icon component  *component
        }
        .
        .
        .

    ]
*/

export default function App({buttons}) {
  return (
    <View style={styles.container}>
      {buttons.map(({title, icon}) => (
        <ToggleButton title={title}>{icon}</ToggleButton>
      ))}
    </View>
  );
}
