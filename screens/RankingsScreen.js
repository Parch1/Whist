import * as React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import TouchableScale from 'react-native-touchable-scale';
import { List, Avatar, Title } from 'react-native-paper';

export default function RankingsScreen() {
  return (
    <View style={styles.container}>
      <Title style={{
        fontWeight: 'bold',
        fontSize: 30,
        padding: 20
      }}>Rankings</Title>
      <FlatList
        data={[null, null, null]}
        keyExtractor={(item) => item?.id ?? Math.random()}
        renderItem={({item}) => {
          return (
            <List.Item
              title="Item"
              description="some descirption"
              left={props => <Avatar.Image
                source={require('../assets/images/robot-prod.png')}
              />}
              right={props => <List.Icon
                color="black"
                icon="chevron-right"
              />}
            />
          );
        }}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  touchableScale: {
    padding: 10,
    height: 75,
  },
  linearGradient: {
    width: "100%",
    height: "100%",
    borderRadius: 5
  }
});

