import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { auth } from '../lib/firebase';

const MainScreen = ({ navigation }: { navigation: any }) => {
  const [uid, setUid] = useState<string>('');

  console.log(uid);
  const _signIn = async () => {
    await auth
      .signInAnonymously()
      .then((user) => {
        setUid(user.user!.uid);
      })
      .catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
      });
    if (uid !== '') {
      navigation.navigate('Sub', {
        param: { uid },
      });
    }
  };
  return (
    <View style={styles.container}>
      <Text>MainScreen</Text>
      <Button title="SignIn" onPress={_signIn} />
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
