import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';

import {TopBar} from './components';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <TopBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>Hi there !</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
