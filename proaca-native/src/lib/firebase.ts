import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import 'firebase/functions';
import Constants from 'expo-constants';

if (!firebase.apps.length) {
  firebase.initializeApp(Constants.manifest.extra!.firebase); 
}

export const db = firebase.firestore()
export const auth = firebase.auth()
export const storage = firebase.storage()
export const functions = firebase.functions();

export const saveUserInfo = async (uid: string, uname: string, age: number) => {
  const data = {
    uid,
    uname,
    age
  }
  await db.collection("users").doc(uid).set(data).then(res => {
    console.log('success!!')
  }).catch(err => {
    console.log(err)
  })
}

export const getUserInfo = async (uid: string) => {
  var docRef = db.collection("users").doc(uid);
  await docRef.get().then((doc) => {
    if (doc.exists) {
      console.log("Document data:", doc.data());
      return doc.data()
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      return "No such document!"
    }
  }).catch((error) => {
    console.log("Error getting document:", error);
  });
};

export const sendMessage = async (uid: string,uname:string, message: string) => {
  const data = {
    uid,
    uname,
    message,
    createAt: firebase.firestore.Timestamp.now()
  }
  await db.collection("messages").add(data).then(res => {
    console.log('send message!!')
  }).catch(err => {
    console.log(err)
  })
}

export const functionOnCall = async () => {
  // var addMessage = firebase.functions().httpsCallable('addMessage');
  const addMessage = await functions.httpsCallable('addMessage');
  addMessage({ text: "messageText satake test" })
  .then((result) => {
    // Read result of the Cloud Function.
    var sanitizedMessage = result.data.text;
    console.log(sanitizedMessage)
  }).catch(err => {
    console.log(err)
  })
}
