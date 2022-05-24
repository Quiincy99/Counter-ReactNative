/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const KEY = 'COUNTER';
  const [count, setCount] = useState(0);

  const storeData = async (value: number) => {
    try {
      await AsyncStorage.setItem(KEY, String(value));
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      let value = await AsyncStorage.getItem(KEY);
      if (value !== null) {
        setCount(JSON.parse(value));
      } else {
        setCount(0);
      }
    } catch (e) {}
  };

  const resetData = () => {
    storeData(0);
    setCount(0);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
      }}>
      <Text
        style={{
          marginBottom: 10,
        }}>
        You clicked {count} times!!
      </Text>

      <Button
        onPress={() => {
          storeData(count + 1);
          setCount(count + 1);
        }}
        title="Click"></Button>

      <View
        style={{
          marginTop:10
        }}
      >
        <Button
          onPress={() => {
            resetData();
          }}
          title="Reset"></Button>
      </View>
    </View>
  );
};

export default App;
