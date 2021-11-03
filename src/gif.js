import React from 'react';
import {StyleSheet, Image, Text, SafeAreaView} from 'react-native';
import gif from './celebrationGif.gif';

const Gif = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>ADDING NEW FEATURE!</Text>
      <Image source={gif} style={styles.gif} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 100,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  gif: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default Gif;
