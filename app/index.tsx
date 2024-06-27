import React from 'react';
import { Text, ScrollView, Linking, Image, StyleSheet } from "react-native";
import { Counter } from './features/counter/Counter';

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{uri: 'https://velog.velcdn.com/images/sheoae12/post/b4e5fdf4-355b-4c7b-a0f5-9780bd0e6a54/image.png'}} style={styles.logo} />
      <Counter/>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  code: {
    fontWeight: 'bold',
  },
  learn: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 10,
  },
  link: {
    color: '#1E90FF',
    textDecorationLine: 'underline',
  },
});

