import React from 'react';

import {StyleSheet, Text, View, StatusBar} from 'react-native';
import Color from './src/assets/Colors/Color';
import MainNavigator from './src/components/Navigator/Navigator';

const App = () => {
  return <MainNavigator />;
};

export default App;

const styles = StyleSheet.create({});

// {/* <StatusBar
//         animated={true}
//         backgroundColor={Color.backgroundColor}
//         barStyle={"default"}
//         showHideTransition={"slide"}
//         hidden={false} /> */}
