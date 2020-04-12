import React from 'react';
import {Dimensions, Text, View, StyleSheet} from 'react-native';
import {Surface} from 'react-native-paper';
import {LinearGradient} from 'expo-linear-gradient';
import {LineChart} from 'react-native-chart-kit';
import StatBox from '../components/StatBox';
import Theme from '../constants/Theme';
import {Avatar} from 'react-native-elements';

const AVATAR_SIZE = 100;
const BORDER_SIZE = 3;
const CONTAINER_PADDING = 20;

export default function Profile() {
  return (
    <View style={styles.container}>
      <Surface style={styles.surface}>
        <LinearGradient
          colors={[Theme.colors.primary, 'darkorange']}
          start={[0.5, 0]}
          end={[0.5, 1]}
          style={styles.avatarContainer}
        >
          <Avatar
            style={styles.avatar}
            size={AVATAR_SIZE - 2 * BORDER_SIZE}
            source={{uri: 'https://avatars1.githubusercontent.com/u/12504344?s=280&v=4'}}
            rounded
          />
          <Text style={styles.username}>John Doe</Text>
        </LinearGradient>
      </Surface>
      <View style={styles.statsContainer}>
        <StatBox
          name="dumbbell"
          style={{borderRightColor: 'gray', borderRightWidth: 1}}
          title="Workouts Completed"
          amount={12}
        />
        <StatBox
          name="fire"
          style={{borderRightColor: 'gray', borderRightWidth: 1}}
          title="Highest Streak"
          amount={90}
        />
        <StatBox
          name="account"
          style={{borderRightColor: 'gray', borderRightWidth: 1}}
          title="Connected Friends"
          amount={7}
        />
      </View>
      <View style={styles.overviewContainer}>
        <Surface style={{
          marginVertical: 20,
          borderRadius: 20,
          padding: CONTAINER_PADDING
        }}>
          <LineChart
            data={{
              labels: ["Apr 6", "Apr 7", "Apr 8", "Apr 9", "Apr 10", "Apr 11"],
              datasets: [
                {
                  data: [20, 45, 28, 80, 99, 43]
                }
              ]
            }}
            width={Dimensions.get("window").width - 4 * CONTAINER_PADDING}
            height={100}
            withVerticalLabels={false}
            chartConfig={{
              fillShadowGradient: '#ffa726',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 160, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "3",
                strokeWidth: "1",
                stroke: "#ffa726"
              }
            }}
            style={{
              marginVertical: 10,
              borderRadius: 16,
            }}
          />
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
    borderColor: 'orange'
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
