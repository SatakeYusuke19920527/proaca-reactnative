import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  text: string;
};

const Greeting: React.FC<Props> = ({ text }) => {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
};

export default Greeting;
