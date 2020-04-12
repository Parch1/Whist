import * as React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { List, Title } from 'react-native-paper';
import {Avatar} from 'react-native-elements'

export default function StreaksScreen({navigation}) {
  const users = [
    {
      name: 'Blake Young',
      streak: 90
    },
    {
      name: 'Oliwier Bob',
      streak: 87
    },
    {
      name: 'Malcolm Osborn',
      streak: 64
    },
    {
      name: 'Ashton Blankenship',
      streak: 53
    }
  ];

  return (
    <View style={styles.container}>
      <Title style={{
        fontWeight: 'bold',
        fontSize: 30,
        padding: 30,
        paddingBottom: 20,
      }}>Streaks</Title>
      <FlatList
        data={users}
        keyExtractor={(item) => item?.id ?? Math.random().toString()}
        renderItem={({item: user}) => {
          const defaultAvatar = 'https://www.digitalamerica.org/wp-content/uploads/2014/01/facebook-default-no-profile-pic.jpg';
          return (
            <List.Item
              title={user.name}
              onPress={() => {
                navigation.navigate("UserProfileScreen", user);
              }}
              description={<Text style={{fontWeight: 'bold'}}>
                {user.streak} day streak
              </Text>}
              left={() =>
                <View style={{flex: -1, justifyContent: 'center'}}>
                  <Avatar
                    source={{uri: user.avatar || defaultAvatar}}
                    rounded={true}
                  />
                </View>
              }
              right={() =>
                <List.Icon
                  color="black"
                  icon="chevron-right"
                  style={{margin: 0, padding: 0}}
                />
              }
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

