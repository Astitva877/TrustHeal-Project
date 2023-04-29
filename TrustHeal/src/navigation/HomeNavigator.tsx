import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Upcoming from '../screens/Upcoming';
import PrescriptionPending from '../screens/PrescriptionPending';
import Completed from '../screens/Completed';
import Canceled from '../screens/Canceled';
import AllConsultations from '../screens/AllConsultations';
import DetailScreen from '../screens/DetailScreen';

const Stack = createNativeStackNavigator();
const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Upcoming" component={Upcoming} />
      <Stack.Screen
        name="PrescriptionPending"
        component={PrescriptionPending}
      />
      <Stack.Screen name="Completed" component={Completed} />
      <Stack.Screen name="Canceled" component={Canceled} />
      <Stack.Screen name="AllConsultations" component={AllConsultations} />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
