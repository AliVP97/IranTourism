import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    width: 160,
    height: 65,
    margin: 8,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  iconContainer: {
    height: 50,
    width: 50,
    padding: 5,
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    marginEnd: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default styles;
