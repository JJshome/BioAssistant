import React from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <StatusBar barStyle="dark-content" />
      <Text>BioTech AI Mobile App</Text>
    </SafeAreaView>
  );
};
export default App;
