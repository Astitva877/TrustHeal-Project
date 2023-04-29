import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import History from '../screens/History';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeNavigator from './HomeNavigator';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Tab = createBottomTabNavigator();
const RootNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Ionicons name="home-outline" color={'black'} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: () => (
            <MaterialIcons name="history" color={'black'} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RootNavigator;
