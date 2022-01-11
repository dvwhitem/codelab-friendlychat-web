/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDpDepCO6Sm7zLbchMbANs0sdZ2S0_QUP4",

  authDomain: "friendlychat-dv.firebaseapp.com",

  projectId: "friendlychat-dv",

  storageBucket: "friendlychat-dv.appspot.com",

  messagingSenderId: "428731583109",

  appId: "1:428731583109:web:156179b97099c0952d77ec"

};


export function getFirebaseConfig() {
  if (!firebaseConfig || !firebaseConfig.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return firebaseConfig;
  }
}