import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import ProfileScreen from '../screens/ProfileScreen';
import ExerciseScreen from '../screens/ExerciseScreen';
import StreaksScreen from '../screens/StreaksScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Profile';

export default function BottomTabNavigator({ navigation, route }) {
  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="account" />,
        }}
      />
      <BottomTab.Screen
        name="Exercise"
        component={ExerciseScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="dumbbell" />,
        }}
      />
      <BottomTab.Screen
        name="Streaks"
        component={StreaksScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="fire" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

