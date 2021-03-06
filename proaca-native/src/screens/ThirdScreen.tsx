import React, { useEffect, useState, useContext } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  FlatList,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { sendMessage, db } from '../lib/firebase';
import { UserContext } from '../contexts/userContexts';
import { MessageType } from '../types/MessageType';
import MessageItem from '../components/MessageItem';

const ThirdScreen = () => {
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<MessageType[]>([]);
  const { userInfo } = useContext(UserContext);
  useEffect(() => {
    _getMessage();
  }, []);
  const _getMessage = async () => {
    await db
      .collection('messages')
      .orderBy('createAt', 'asc')
      .onSnapshot((querySnapshot) => {
        setMessages(
          querySnapshot.docs.map((doc) => ({
            uid: doc.data().uid,
            uname: doc.data().uname,
            message: doc.data().message,
            createAt: doc.data().createAt,
          }))
        );
      });
  };
  const _sendMessage = () => {
    if (userInfo) {
      sendMessage(userInfo!.uid, userInfo?.uname, message);
    }
    setMessage('');
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.main}>
        <FlatList
          data={messages}
          renderItem={({ item }) => (
            <MessageItem key={item.createAt.toDate.toString()} item={item} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
      <KeyboardAvoidingView style={styles.footer} behavior="padding">
        <TextInput
          onChangeText={setMessage}
          value={message}
          placeholder="message"
        />
        <View style={styles.button}>
          <Button title="send" color="#f194ff" onPress={_sendMessage} />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ThirdScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    display: 'flex',
  },
  main: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  input: {
    width: '70%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 3,
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    width: '20%',
    paddingTop: 12,
  },
});
