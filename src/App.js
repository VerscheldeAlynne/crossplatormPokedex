import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Pokedex } from './Pokedex';
import styles from './styles';


export default function App() {
  return (
    <View style={styles}>
      <Pokedex />
    </View>
  );
}
