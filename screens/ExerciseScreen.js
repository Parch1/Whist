import React from 'react';
import {View, StyleSheet} from 'react-native';
import BodyModel from '../components/BodyModel';
import {Text, Title} from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import ExerciseSearchScreen from './ExerciseSearchScreen';

function Color(props) {
  return <View style={[styles.color, {backgroundColor: props.color}]} />;
}

function ExerciseSearchBodyModel() {
  return (
    <View style={{ flex: 1 }}>
      <Title style={{
        fontWeight: 'bold',
        fontSize: 30,
        padding: 30
      }}>
        Exercises
      </Title>
      <View style={{flex: 1, alignItems: 'center', justifyContent: "center"}}>
        <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          height: 10,
          flexDirection: 'row'
        }}>
          <Text style={[styles.endText, {marginLeft: 5}]}>Less Trained</Text>
          <Color color="red" />
          <Color color="orange" />
          <Color color="yellow" />
          <Color color="green" />
          <Color color="darkgreen" />
          <Text style={[styles.endText, {marginRight: 5}]}>More Trained</Text>
        </View>
        <BodyModel colors={{
          head: 'red',
          torso: 'red',
          arms: 'red',
          legs: 'red'
        }} />
      </View>
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

const styles = StyleSheet.create({
  endText: {
    fontWeight: 'bold',
    fontSize: 10,
    flex: 1,
    textAlign: 'center'
  },
  color: {
    flex: 1,
    height: "100%",
    aspectRatio: 1,
    margin: 5
  }
});
