import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import TouchableScale from 'react-native-touchable-scale';

export default function RankingsScreen() {
  return (
    <View style={styles.container}>
      <TouchableScale
        onPress={() => console.log('hi')}
        activeScale={0.9}
        style={styles.touchableScale}
      >
        <LinearGradient
          colors={['#ffcf00', '#ffaf00']}
          start={[0, 0.5]}
          end={[1, 0.5]}
          style={styles.linearGradient}
        >
          <Text>
            Testing
          </Text>
        </LinearGradient>
      </TouchableScale>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  touchableScale: {
    padding: 20,
    height: 150,
  },
  linearGradient: {
    width: "100%",
    height: "100%",
    borderRadius: 30
  }
});

