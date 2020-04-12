import React from 'react';
import {Dimensions, Text, View, StyleSheet} from 'react-native';
import { Avatar, Surface } from 'react-native-paper';
import {LinearGradient} from 'expo-linear-gradient';
import {LineChart} from 'react-native-chart-kit';
import StatBox from '../components/StatBox';

const AVATAR_SIZE = 100;
const BORDER_SIZE = 3;
const CONTAINER_PADDING = 20;

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Surface style={styles.surface}>
        <LinearGradient
          colors={['#ffcf00', '#ffaf00']}
          start={[0.5, 0]}
          end={[0.5, 1]}
          style={styles.avatarContainer}
        >
          <Avatar.Image
            style={styles.avatar}
            size={AVATAR_SIZE - 2 * BORDER_SIZE}
            source={require('../assets/images/robot-dev.png')}
          />
          <Text style={styles.username}>John Doe</Text>
        </LinearGradient>
      </Surface>
      <View style={styles.statsContainer}>
        <StatBox
          name="dumbbell"
          style={{borderRightColor: 'gray', borderRightWidth: 1}}
          title="Workouts Completed"
        />
        <StatBox
          name="dumbbell"
          style={{borderRightColor: 'gray', borderRightWidth: 1}}
        />
        <StatBox
          name="dumbbell"
          style={{borderRightColor: 'gray', borderRightWidth: 1}}
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
    fontSize: 30
  },
  statsContainer: {
    flex: -1,
    flexDirection: 'row',
    justifyContent: 'space-between'


  }
});
