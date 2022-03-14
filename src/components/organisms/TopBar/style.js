import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 30,
    marginTop: 50,
    marginBottom: 40,
  },
  menu: {
    icon: {
      height: 35,
      width: 35,
      padding: 7,
      fontSize: 21,
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
      letterSpacing: 0.5,
      color: '#8A8A8A',
    },
  },
  location: {
    flexDirection: 'row',
    alignItems: 'baseline',

    icon: {
      fontSize: 12,
      color: '#3BAFE9',
      marginStart: 5,
    },
    text: {
      fontSize: 15,
      fontWeight: 'bold',
      color: 'black',
      marginTop: 5,
    },
  },
});

export default styles;
