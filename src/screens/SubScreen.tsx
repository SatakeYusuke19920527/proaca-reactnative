import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const SubScreen = ({ navigation, route }: { navigation: any; route: any }) => {
  const { itemId, param } = route.params;
  return (
    <View style={styles.container}>
      <Text>SubScreen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Text>itemId: {itemId}</Text>
      <Text>uid: {param.uid}</Text>
      <Text>name: {param.name}</Text>
      <Button
        title="Go to Third"
        onPress={() => navigation.navigate('Third')}
      />
    </View>
  );
};

export default SubScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
