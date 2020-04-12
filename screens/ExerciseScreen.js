import React from 'react';
import {View, StyleSheet} from 'react-native';
import BodyModel from '../components/BodyModel';
import {Text, Title} from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import ExerciseSearchScreen from './ExerciseSearchScreen';

function ExerciseSearchBodyModel() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Title style={{ fontWeight: 'bold' }}>Select a body part to exercise:</Title>
      <BodyModel />
    </View>
  )
}

const Stack = createStackNavigator();
export default function ExerciseScreen() {
  return (
    <Stack.Navigator
      initialRouteName="ExerciseTypeSelect"
    >
      <Stack.Screen
        name="ExerciseTypeSelect"
        component={ExerciseSearchBodyModel}
        options={{
          headerShown: false,
          headerTitle: "Select Type"
        }}
      />
      <Stack.Screen
        name="ExerciseSearch"
        component={ExerciseSearchScreen}
      />
    </Stack.Navigator>
  );
}
