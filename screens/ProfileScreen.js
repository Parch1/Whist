import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-paper';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Avatar.Image
        size={24}
        source={require('../assets/images/icon.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  }
});
