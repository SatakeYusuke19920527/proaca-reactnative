import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ThirdScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ThirdScreen</Text>
    </View>
  );
};

export default ThirdScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
