import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import TouchableScale from 'react-native-touchable-scale';

function Row({flex, ...props}) {
  return <View style={[styles.row, {flex}]}>{props.children}</View>;
}

function Column({flex, empty, type}) {
  const navigation = useNavigation();

  const borderStyle = empty ? null : {borderWidth: 1, borderColor: 'black'};
  return (
    <TouchableScale
      style={[styles.column, {flex}, borderStyle]}
      onPress={() => navigation.navigate("ExerciseSearch", {type})}
    />
  );
}

export default function BodyModel() {
  return (
    <View style={{flex: -1, height: 500, width: 200, flexDirection: 'column'}}>
      <Row flex={1}>
        <Column flex={1} empty/>
        <Column flex={2} type="head" />
        <Column flex={1} empty />
      </Row>
      <Row flex={2}>
        <Column flex={1} type="arms" />
        <Column flex={2} type="torso" />
        <Column flex={1} type="arms" />
      </Row>
      <Row flex={2}>
        <Column flex={1} empty />
        <Column flex={1} type="legs" />
        <Column flex={1} type="legs" />
        <Column flex={1} empty />
      </Row>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginVertical: 5,
    width: "100%",
  },
  column: {
    marginHorizontal: 5,
  }
});