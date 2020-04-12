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
      padding: 20,
      position: 'relative'
    }, props.style]}>
      <MaterialCommunityIcons
        name={props.name}
        size={70}
        color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        style={{opacity: 0.3}}
      />
      <View style={{
        position: 'absolute',
        zIndex: 1,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={{
          fontWeight: 'bold',
          fontSize: 30,
        }}>{props.amount}</Text>
        <Text style={{fontWeight: 'bold', textAlign: 'center', paddingHorizontal: 20}}>{props.title}</Text>
      </View>
    </View>
  );
}
