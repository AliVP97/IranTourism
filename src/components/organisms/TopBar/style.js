import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    margin: 30,
  },
  menu: {
    icon: {
      height: 35,
      width: 35,
      padding: 5,
      backgroundColor: 'white',
      color: '#989898',
      borderRadius: 8,
    },
  },
  profile: {
    height: 35,
    width: 35,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: 'white',
  },
  currentLocation: {
    alignItems: 'center',

    text: {
      fontSize: 12,
      color: '#989898',
    },
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',

    icon: {
      color: '#3BAFE9',
      marginEnd: 3,
    },
    text: {
      fontWeight: 'bold',
    },
  },
});

export default styles;
