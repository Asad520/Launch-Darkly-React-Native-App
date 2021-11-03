import React from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Welcome to Home Page!</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
  },
  heading: {
    marginTop: 100,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Home;
