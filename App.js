import React from 'react';
import {
  SafeAreaView,
  NativeModules,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

const {MyNativeModule} = NativeModules;

const App = () => {
  const onPressButton = () => {
    console.log('Este es un log desde javascript');
    MyNativeModule.simpleLogger();
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.container}>
        <Text style={styles.text}>Hello MDevConf!</Text>
        <Button title="Click me" onPress={onPressButton} />
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
