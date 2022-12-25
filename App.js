import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PokeAPI from './PokeAPI';
import styles from "./pokedexStylesheet.css";

export default function App() {
  return (
    <View style={styles}>
      <PokeAPI/>
    </View>
  );
}

/**const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pokedex: {
    backgroundColor: '#e61515',
    width: 848,
    margin: 0 ,
    padding: 1 ,
    borderRadius: 15,
    borderColor:  '#000' ,
    border: 10,
    flex: 1,
},
screen: {
  borderRadius: 3,
  FontFace: "VT323",
  borderColor: '#879a65',
  border: 3,
},
})
*/

/*
fetch('Your URL to fetch data from', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstParam: 'yourValue',
    secondParam: 'yourOtherValue',
  }),
});*/