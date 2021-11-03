import React from 'react';
import {SafeAreaView, Text, ActivityIndicator, StyleSheet} from 'react-native';

const UnderDevelopment = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.developmentText}>
        This feature is under development!
      </Text>
      <ActivityIndicator
        style={styles.activityIndicator}
        color="white"
        size="large"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    flex: 1,
    alignItems: 'center',
  },
  activityIndicator: {
    marginTop: 100,
  },
  developmentText: {
    textAlign: 'center',
    marginTop: 100,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default UnderDevelopment;
