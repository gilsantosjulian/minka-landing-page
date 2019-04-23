const firebase = require('firebase-admin');

exports.getUsers = function(req, res) {
  let query = firebase.firestore().collection('participants')
  const result = [];
  query
  .get()
  .then((snapshot) => {
    snapshot.forEach(doc => {
      const data = Object.assign(doc.data(), { id: doc.id });
      result.push(data);
    });
  
    res.send(result);
  })
  .catch((error) => res.send(error.message));
};