import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerTitle: 'POKÉMON CHALLENGE',
      headerTitleStyle: { fontFamily: 'RobotoSlab-Bold' },
      headerTintColor: '#fff',
      headerStyle: { backgroundColor: '#28262E' },
      headerTitleAlign: 'center',
      cardStyle: { backgroundColor: '#312E38' },
    }}
  >
    <App.Screen name="Dashboard" component={Dashboard} />
  </App.Navigator>
);

export default AppRoutes;
