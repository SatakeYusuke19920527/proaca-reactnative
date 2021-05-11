import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const MainScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Text>MainScreen</Text>
      <Button
        title="Go to Sub"
        onPress={() =>
          navigation.navigate('Sub', {
            itemId: 12345,
            param: { uid: 'saeidfk12', name: 'satake' },
          })
        }
      />
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
