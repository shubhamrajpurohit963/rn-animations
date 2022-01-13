import React, { useState } from 'react';
import {
  Animated,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

const LessonOne = () => {

  const value = useState(new Animated.Value(0))[0]

  const handleClick = () => {
    Animated.timing(value, {
      toValue: 140,
      duration: 1000,
      useNativeDriver: false
    }).start()
  }

  return (
    <SafeAreaView>
      <Animated.View style={{ marginLeft: value }} >
        <Text style={{ fontSize: 20 }}>Hello World</Text>
      </Animated.View>

      <TouchableOpacity
        style={{
          backgroundColor: 'black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          margin: 10,
          borderRadius: 10,
        }}
        onPress={handleClick}
        >
        <Text style={{color: 'white'}}>Start</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default LessonOne;
