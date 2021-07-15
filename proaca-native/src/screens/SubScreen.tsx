import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { saveUserInfo } from '../lib/firebase';
import { UserContext } from '../contexts/userContexts';

const SubScreen = ({ navigation, route }: { navigation: any; route: any }) => {
  const { itemId, param } = route.params;
  const [uname, setUname] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const { setUserInfo } = useContext(UserContext);
  const _onChangeText = () => {
    const uinfo = {
      uid: param.uid,
      uname,
      age: Number(age),
    };
    setUserInfo(uinfo);
    saveUserInfo(param.uid, uname, Number(age));
  };
  return (
    <View style={styles.container}>
      <Text>SubScreen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Text>uid: {param.uid}</Text>
      <TouchableOpacity style={{ width: '100%' }}>
        <TextInput
          onChangeText={setUname}
          value={uname}
          style={styles.input}
          placeholder="uname"
        />
        <TextInput
          onChangeText={setAge}
          value={age}
          style={styles.input}
          placeholder="age"
        />
      </TouchableOpacity>
      <Button title="save user info" color="#f194ff" onPress={_onChangeText} />
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
  input: {
    width: '90%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 3,
  },
});
