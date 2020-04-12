import React from 'react';
import {Dimensions, Text, View, StyleSheet} from 'react-native';
import {Surface, Title} from 'react-native-paper';
import {LinearGradient} from 'expo-linear-gradient';
import {LineChart} from 'react-native-chart-kit';
import StatBox from '../components/StatBox';
import Theme from '../constants/Theme';
import {Avatar, Icon} from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

const AVATAR_SIZE = 100;
const BORDER_SIZE = 3;
const CONTAINER_PADDING = 20;

export default function Profile(props) {
  const user = props.user;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Surface style={styles.surface}>
        <LinearGradient
          colors={[Theme.colors.primary, 'darkorange']}
          start={[0.5, 0]}
          end={[0.5, 1]}
          style={styles.avatarContainer}
        >
          <Icon
            name="chevron-left"
            type="material-community"
            size={40}
            color="white"
            containerStyle={{
              position: 'absolute',
              marginTop: 15,
              top: 0,
              left: 0,
              alignSelf: 'flex-start'
            }}
            onPress={() => navigation.pop()}
          />
          <Avatar
            style={styles.avatar}
            size={AVATAR_SIZE - 2 * BORDER_SIZE}
            source={{uri: user.avatar}}
            rounded
          />
          <Text style={styles.username}>{user.name}</Text>
        </LinearGradient>
      </Surface>
      <View style={styles.statsContainer}>
        <StatBox
          name="dumbbell"
          style={{borderRightColor: 'gray', borderRightWidth: 1}}
          title="Workouts Completed"
          amount={392}
        />
        <StatBox
          name="fire"
          style={{borderRightColor: 'gray', borderRightWidth: 1}}
          title="Highest Streak"
          amount={user.streak}
        />
        <StatBox
          name="account"
          style={{borderRightColor: 'gray', borderRightWidth: 1}}
          title="Connected Friends"
          amount={user.friends}
        />
      </View>
      <View style={styles.overviewContainer}>
        <Surface style={{
          marginVertical: 20,
          borderRadius: 20,
          padding: CONTAINER_PADDING,
          flex: -1,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Text>Not enough data to display a chart.</Text>
        </Surface>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  avatar: {
    height: AVATAR_SIZE,
    aspectRatio: 1,
    borderWidth: BORDER_SIZE,
    borderRadius: 50,
    borderColor: 'orange',
    marginTop: 10
  },
  avatarContainer: {
    flex: 1,
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%"
  },
  surface: {
    flex: 1,
  },
  overviewContainer: {
    flex: 1,
    flexGrow: 2,
    alignItems: 'center'
  },
  username: {
    color: 'white',
    margin: 5,
    fontSize: 30,
    fontWeight: 'bold'
  },
  statsContainer: {
    flex: -1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: CONTAINER_PADDING
  }
});
