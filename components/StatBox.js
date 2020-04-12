import * as React from 'react';
import Colors from '../constants/Colors';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function StatBox(props) {
  return (
    <View style={[{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    }, props.style]}>
      <MaterialCommunityIcons
        name={props.name}
        size={40}
        color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
      <Text style={{fontWeight: 'bold', textAlign: 'center'}}>{props.title}</Text>
    </View>
  );
}
