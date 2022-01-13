import React, {useState} from 'react';
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

const LessonTwo = () => {
  const value = useState(new Animated.Value(0))[0];

  function fadeIn(){
    Animated.timing(value, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start()
  }

  function fadeOut(){
    Animated.timing(value, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true
    }).start()
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
      }}>
      <Animated.View style={{opacity: value}}>
        <Text style={{fontSize: 25}}>Hello World</Text>
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
        onPress={fadeIn}>
        <Text style={{color: 'white'}}>Fade In</Text>
      </TouchableOpacity>

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
        onPress={fadeOut}>
        <Text style={{color: 'white'}}>Fade Out</Text>
      </TouchableOpacity>


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default LessonTwo;
