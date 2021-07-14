import * as functions from "firebase-functions";
// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
const line = require('@line/bot-sdk');
admin.initializeApp();

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("HEllo I'm log!!", { structuredData: true });
  
  

  response.send("Hello from Firebase!====");
});