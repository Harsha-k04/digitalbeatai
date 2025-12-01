// lib/firebaseAdmin.js
import admin from "firebase-admin";

const projectId = process.env.FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
let privateKey = process.env.FIREBASE_PRIVATE_KEY;
const storageBucket = process.env.FIREBASE_STORAGE_BUCKET; // e.g. "your-project-id.appspot.com"

if (!projectId || !clientEmail || !privateKey || !storageBucket) {
  // Not fatal in client builds, but server functions will fail if not set.
  // Export a dummy so client-side imports do not crash.
  console.warn("Firebase admin env vars are not fully configured.");
}

if (privateKey && privateKey.indexOf("\\n") !== -1) {
  // If private key was pasted with escaped newlines, fix them
  privateKey = privateKey.replace(/\\n/g, "\n");
}

if (!admin.apps.length && projectId && clientEmail && privateKey) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId,
      clientEmail,
      privateKey,
    }),
    storageBucket,
  });
}

// If initialization failed (missing env), bucket will be undefined
const bucket = admin.apps.length ? admin.storage().bucket() : undefined;

export { bucket, admin };
