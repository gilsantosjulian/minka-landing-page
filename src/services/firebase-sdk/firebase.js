import * as firebase from 'firebase';

const settings = {};

const config = {
    apiKey: "AIzaSyCxPXfMXSroDBAd67V48_9xdoBXNcdX4sI",
    authDomain: "minka-web.firebaseapp.com",
    databaseURL: "https://minka-web.firebaseio.com",
    projectId: "minka-web",
    storageBucket: "minka-web.appspot.com",
    messagingSenderId: "841921195572"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;