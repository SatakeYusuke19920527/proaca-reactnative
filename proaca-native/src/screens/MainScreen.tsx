import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { auth } from '../lib/firebase';
import { functionOnCall } from '../lib/firebase';
import firebase from 'firebase';

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
        console.log(error);
      });
    if (uid !== '') {
      navigation.navigate('Sub', {
        param: { uid },
      });
    }
  };
  const _firebaseOnCall = async () => {
    console.log('start======');
    var helloWorld = firebase.functions().httpsCallable('helloWorld');
    helloWorld({ text: 'messageText satake test' })
      .then((result) => {
        console.log('this is invoked', result);
        console.log(result.data);
      })
      .catch((err) => {
        console.log('err is invoked');
        console.log(err);
      });
  };
  return (
    <View style={styles.container}>
      <Text>MainScreen</Text>
      <Button title="SignIn" onPress={_signIn} />
      <Button title="function" onPress={_firebaseOnCall} />
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
