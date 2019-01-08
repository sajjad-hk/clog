"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();
const FieldValue = admin.firestore.FieldValue;
exports.createUserRecord = functions.auth.user().onCreate((user, context) => {
    const userRef = db.doc(`users/${user.uid}`);
    return userRef.set({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        updatedAt: FieldValue.serverTimestamp(),
        createdAt: FieldValue.serverTimestamp()
    });
});
//# sourceMappingURL=auth.js.map