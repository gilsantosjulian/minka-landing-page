const firebase = require('firebase-admin');

exports.getMinkaContent = function(req, res) {
  const { document, collection } = req.query;
  
  firebase.firestore()
  .collection('minkaContent')
  .doc(document)
  .collection(collection)
  .get()
  .then((docs) => {
    docs.forEach((doc) => {
      firebase.firestore()
      .collection('minkaContent')
      .doc(document)
      .collection(collection)
      .doc(doc.id)
      .get()
      .then((response) => res.send(response.data()))
    });
  })
};