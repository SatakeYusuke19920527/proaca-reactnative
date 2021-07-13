import firebase from 'firebase'

export type MessageType = {
  uid: string,
  uname: string,
  message: string,
  createAt: firebase.firestore.Timestamp
}