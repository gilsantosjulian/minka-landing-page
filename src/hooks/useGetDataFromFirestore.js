import { useState, useEffect } from 'react';
import requester from 'services/requester';

export default (document, collection) => {
  const [initialized, setInitialized] = useState(false);
  const [texts, setTexts] = useState({});

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
      requester
      .get('/minkaContent', { document, collection })
      .then((response) => setTexts(response.data));
    }
  }, [texts])

  return texts;
};