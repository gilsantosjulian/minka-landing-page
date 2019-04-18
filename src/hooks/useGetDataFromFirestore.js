import { useState, useEffect } from 'react';
import firestore from 'services/firestore';

export default (document, collection) => {
  const [initialized, setInitialized] = useState(false);
  const [texts, setTexts] = useState({});

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
      
      firestore
      .collection('minkaContent')
      .doc(document)
      .collection(collection)
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          firestore
          .collection('minkaContent')
          .doc(document)
          .collection(collection)
          .doc(doc.id)
          .get()
          .then((response) => setTexts(response.data()))
        });
      })
    }
  }, [texts])

  return texts;
};