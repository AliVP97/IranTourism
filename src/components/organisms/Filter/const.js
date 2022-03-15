import React from 'react';
import {Image} from 'react-native-elements';
import styles from './style';
import shopIcon from '../../../assets/images/icons8-shop-48.png';
import cityIcon from '../../../assets/images/icons8-palace-48.png';
import museumIcon from '../../../assets/images/icons8-museum-48.png';
import natureIcon from '../../../assets/images/icons8-island-on-water-48.png';

const buttons = [
  {
    title: 'خرید',
    icon: <Image source={shopIcon} style={styles.icon} />,
  },
  {
    title: 'شهری',
    icon: <Image source={cityIcon} style={styles.icon} />,
  },
  {
    title: 'موزه',
    icon: <Image source={museumIcon} style={styles.icon} />,
  },
  {
    title: 'طبیعت',
    icon: <Image source={natureIcon} style={styles.icon} />,
  },
];

export {buttons};
