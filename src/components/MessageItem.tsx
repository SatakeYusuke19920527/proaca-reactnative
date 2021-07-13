import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MessageType } from '../types/MessageType';

export default function MessageItem({ item }: { item: MessageType }) {
  return (
    <View style={styles.container}>
      <Text>name:{item.uname}</Text>
      <Text>message:{item.message}</Text>
      <Text>date:{item.createAt.toDate().toString()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '98%',
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 5,
    padding: 5,
  },
});
