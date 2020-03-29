import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const AppStack = createStackNavigator();

import Asoagenda from './pages/Asoagenda';
import Asoagendadetail from './pages/Asoagendadetail';


export default function Routes() {
  return  (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Asoagenda" component={Asoagenda}/>
        <AppStack.Screen name="Asoagendadetail" component={Asoagendadetail}/>
      </AppStack.Navigator>
    </NavigationContainer>
  );
}