import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-paper';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Avatar.Image
        size={200}
        source={require('../assets/images/icon.png')}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    margin: 20
  }
});
