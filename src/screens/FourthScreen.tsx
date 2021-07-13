import React, { useEffect, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getUserInfo } from '../lib/firebase';
import { UserContext } from '../contexts/userContexts';

const FourthScreen = () => {
  const { userInfo } = useContext(UserContext);
  useEffect(() => {
    if (userInfo) {
      const uid = userInfo.uid;
      console.log('user情報を取得', uid);
      getUserInfo(uid);
    }
  }, []);
  return (
    <View style={styles.container}>
      <Text>uid : {userInfo?.uid}</Text>
      <Text>uname : {userInfo?.uname}</Text>
      <Text>age : {userInfo?.age}</Text>
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
