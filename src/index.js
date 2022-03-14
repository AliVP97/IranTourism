import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';

import {TopBar} from './components';

const App = () => {
  return (
    <View style={{backgroundColor: '#F6F6F6', height: '100%'}}>
      <TopBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>Hi there !</Text>
      </ScrollView>
    </View>
  );
};

export default App;
