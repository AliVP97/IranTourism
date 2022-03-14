import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import Filter from './components/organisms/Filter';
import {TopBar} from './components';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <View style={{backgroundColor: '#F6F6F6', height: '100%'}}>
        <TopBar />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Filter />
        </ScrollView>
      </View>
    </QueryClientProvider>
  );
};

export default App;
