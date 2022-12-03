import React from 'react';
import {
  Alert,
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
    MyNativeModule.getAppVersion().then(version => {
      console.log(parseFloat(version));
      if (parseFloat(version) <= 4.0) {
        Alert.alert(
          'Advertencia',
          `Version actual es ${version} y puede actualizar a 4.`,
        );
      }
    });
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.container}>
        <Text style={styles.text}>Hello MDevConf!</Text>
        <Button title="Verificar version" onPress={onPressButton} />
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
  },
});

export default App;
