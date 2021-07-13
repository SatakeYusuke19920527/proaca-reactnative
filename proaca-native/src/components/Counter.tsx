import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <View>
      <Text style={styles.textSize}>いいね！ : {count}</Text>
      <Button title="いいね！" onPress={increment} />
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  textSize: {
    fontSize: 50,
  },
});
