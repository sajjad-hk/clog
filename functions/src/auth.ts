import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

admin.initializeApp()
const db = admin.firestore()
const FieldValue = admin.firestore.FieldValue


export const createUserRecord = functions.auth.user().onCreate( (user, context) => {
    const userRef = db.doc(`users/${user.uid}`)

    return userRef.set({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        updatedAt: FieldValue.serverTimestamp(),
        createdAt: FieldValue.serverTimestamp()
    })
})
