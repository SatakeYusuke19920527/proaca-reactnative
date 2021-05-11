import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FourthScreen = () => {
  return (
    <View style={styles.container}>
      <Text>FourthScreen</Text>
    </View>
  );
};

export default FourthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
