import * as functions from "firebase-functions";
// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
const line = require('@line/bot-sdk');
// const db = admin.firestore();
admin.initializeApp();

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("HEllo I'm log!!", { structuredData: true });
  console.log(request.body, '========')
  const obj = JSON.parse(request.body);
  const message = obj.text
  

  response.json({result: "success"});
});

export const proacaHello = functions.https.onRequest((req, res) => {
  res.json({message: "Hello world"})
})

exports.onUpdateUser = functions
    .region("asia-northeast2")
    .firestore
    .document('users/{userId}')
    .onUpdate(async (change, context) => {
      const { userId } = context.params
      const newUser = change.after.data()
      try {
        // const snapshot = await db.collectionGroup('reviews').where('user.id', '==', userId).get()
        // const batch = db.batch()
        // snapshot.docs.forEach((reviewDoc: any) => {
        //   const user = { ...reviewDoc.data().user, name: newUser.name }
        //   batch.update(reviewDoc.ref, {user})
        // });
        // await batch.commit()
        console.log("ここからログスタート")
        console.log(userId)
        console.log(newUser)
        console.log("ここでログ終了")
      } catch (error) {
        console.log(error)
      }
    });