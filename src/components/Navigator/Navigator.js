import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import HomeScreen from '../../Screens/HomeScreen/HomeScreen';
import VisualScreen from '../../Screens/VisualScreen/VisualScreen';

import MainContainerWrapper from '../Wrappers/MainContainerWrapper';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

// icons
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Stack = createNativeStackNavigator();

const HomeScreenWithWrapper = MainContainerWrapper(HomeScreen);
const Tab = createMaterialBottomTabNavigator();

// Tab NAvigator
function MyTabs() {
  return (
    <Tab.Navigator
      labeled={false}
      barStyle={{
        backgroundColor: '#8960fe',
        borderRadius: 30,
        marginHorizontal: 13,
        padding: 6,
        overflow: 'hidden',
        elevation: 2,
        shadowColor: '#8960fe',
        marginBottom: 8,
      }}>
      <Tab.Screen
        name="main"
        options={{
          title: 'Home',
          tabBarIcon: ({color}) => {
            return <Entypo name="home" size={24} color={color} />;
          },
        }}
        component={HomeScreenWithWrapper}
      />
    </Tab.Navigator>
  );
}

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="tabs"
          options={{headerShown: false}}
          component={MyTabs}
        />
        <Stack.Screen
          name="visualscreen"
          options={{headerShown: false}}
          component={VisualScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
