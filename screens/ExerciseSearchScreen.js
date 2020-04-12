import React, {useState} from 'react';
import { View, StyleSheet, FlatList, Text} from 'react-native';
import {Searchbar} from 'react-native-paper';
import _ from 'lodash';

export default function ExerciseSearchScreen({navigation, route}) {
  const [search, setSearch] = useState('');
  navigation.setOptions({
    headerTitle: _.capitalize(route.params.type)
  });

  return (
    <View style={{flex: 1}}>
      <Searchbar
        placeholder="Search"
        onChangeText={text => setSearch(text)}
        value={search}
      />
      <Text>{JSON.stringify(route.params)}</Text>
    </View>
  );
}
