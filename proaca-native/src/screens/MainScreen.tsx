import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { auth } from '../lib/firebase';
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
    const functions = firebase.app().functions('us-central1');
    var helloWorld = await functions.httpsCallable('helloWorld');
    helloWorld({ text: 'messageText satake test' })
      .then((result) => {
        console.log('this is invoked', result);
        console.log(result);
      })
      .catch((error) => {
        var code = error.code;
        var message = error.message;
        var details = error.details;
        console.log('code : ', code);
        console.log('message : ', message);
        console.log('details : ', details);
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
