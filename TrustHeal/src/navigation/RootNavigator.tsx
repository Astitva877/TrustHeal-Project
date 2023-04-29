import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import History from '../screens/History';

import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator();
const RootNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{headerShown: false, tabBarLabel: 'Home'}}
      />
      <Tab.Screen name="History" component={History} />
    </Tab.Navigator>
  );
};

export default RootNavigator;
