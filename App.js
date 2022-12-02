import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.container}>
        <Text style={styles.text}>Hello MDevConf!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  text: {
    fontWeight: '700',
    fontSize: 20,
  },
});

export default App;
