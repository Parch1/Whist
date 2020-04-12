import React, {useEffect, useState} from 'react';
import {Title} from "react-native-paper";
import {View} from "react-native";
import {Text} from "react-native-elements";

export default function WorkoutScreen({navigation, route}) {
  const [counter, setCounter] = useState(5);
  const [interval, setInt] = useState(null);
  const [started, setStarted] = useState(false);

  const [counter2, setCounter2] = useState(30);
  const [interval2, setInt2] = useState(null);

  useEffect(() => {
    if (counter2 === 0) {
      clearInterval(interval2);
      navigation.navigate("Streaks");
    }
  }, [counter2]);

  useEffect(() => {
    if (counter === 0) {
      clearInterval(interval);
      setStarted(true);
      setInt2(setInterval(() => {
        setCounter2(counter2 => counter2 - 1);
      }, 1000))
    }
  }, [counter]);

  useEffect(() => {
    setInt(setInterval(() => {
      setCounter(counter => counter - 1);
    }, 1000));

  }, []);

  return (
    <View style={{flex: 1, padding: 20, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 50}}>Sit-ups</Text>
      <Text style={{textAlign: 'center', fontSize: 20, marginBottom: 20}}>First, lie down on the floor. Then bend your legs.  Finally bring your body to your knees.</Text>
      <Title style={{textAlign: 'center', fontSize: 30}}>Workout {started ? 'ends' : 'starts'} in:</Title>
      <Text style={{textAlign: 'center', fontSize: 35}}>{started ? counter2 : counter}</Text>
    </View>
  )
}
