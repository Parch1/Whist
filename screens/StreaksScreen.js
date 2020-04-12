import * as React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { List, Title } from 'react-native-paper';
import {Avatar} from 'react-native-elements'
import {createStackNavigator} from "@react-navigation/stack";
import UserProfileScreen from "./UserProfileScreen";

const Stack = createStackNavigator();

function StreaksScreen({navigation}) {
  const users = [
    {
      name: 'Blake Young',
      streak: 90,
      friends: 5,
      avatar: 'https://www.smartheadshots.com/actor-headshots/headshots/kids-headshots-6195.jpg'
    },
    {
      name: 'Oliwier Bob',
      streak: 87,
      friends: 6,
      avatar: 'https://cdn8.dissolve.com/p/D25_77_066/D25_77_066_1200.jpg'
    },
    {
      name: 'Malcolm Osborn',
      streak: 64,
      friends: 12,
      avatar: 'https://michaelroud.com/wp-content/uploads/2017/02/SAM-ADLER002-650x975.jpg'
    },
    {
      name: 'Ashton Blankenship',
      streak: 53,
      friends: 15,
      avatar: 'https://format-com-cld-res.cloudinary.com/image/private/s--sKnU_VVo--/c_limit,g_center,h_700,w_65535/fl_keep_iptc.progressive,q_95/v1/5fbbf7fb64d111b5eceb3b1c74069070/BG-1195_web.jpg'
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
                navigation.navigate("Profile", user);
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

export default function StreakNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Streaks"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="Profile"
        component={UserProfileScreen}
      />
      <Stack.Screen
        name="Streaks"
        component={StreaksScreen}
      />
    </Stack.Navigator>
  );
}
