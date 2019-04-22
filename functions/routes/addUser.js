const firebase = require('firebase-admin');

exports.addUser = function(req, res) {
  const body = Object.assign(
    req.body,
    { createAt: firebase.firestore.FieldValue.serverTimestamp() }
  );
  
  firebase
  .firestore()
  .collection('participants')
  .add(body)
  .then(() => {
    res.send(true)
  })
  .catch((error) => {
    res.send(error.message)
  });
};