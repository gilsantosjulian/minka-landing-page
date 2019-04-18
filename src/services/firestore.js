import * as firebase from 'firebase';
import config from 'config/firebase.json';

const settings = {};

firebase.initializeApp(config);
firebase.firestore().settings(settings);

export default firebase.firestore();