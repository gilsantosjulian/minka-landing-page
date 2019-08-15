const firebase = require('firebase-admin');
const {
  isHumanOrBot
} = require('../utils/isHumanOrBot');
const {
  sender
} = require('../utils/sender');

const imgPath = 'https://firebasestorage.googleapis.com/v0/b/minka-web.appspot.com/o/mailing%20(1).jpg?alt=media&token=22427af9-02cd-4224-92bd-00078f252e3d';
const subject = 'Transferencias YA'
const message = `Gracias por tu registro, haz entrado en nuestra lista de espera y pronto 
mejoraremos la forma en que interactúas con el dinero ¡Te estaremos contactando! 
<img src="${imgPath}" alt="Confirmation - Transferencias YA" >`;

exports.addTransfersYaInterestings = function (req, res) {
  const body = Object.assign(
    req.body, {
      createAt: firebase.firestore.FieldValue.serverTimestamp()
    }
  );

  isHumanOrBot(body.token)
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        delete body.token;
        firebase
          .firestore()
          .collection('transfers-ya-interestings')
          .add(body)
          .then(() => {
            return;
          })
          .catch((error) => {
            res.send(error.message)
          });
        return;
      }
      throw Error('Is not a human');
    })
    .then(() => {
      const data = {
        to: body.email,
        message: message,
        subject: subject,
      };
      return sender(Object.assign(body, data));
    })
    .then(() => res.send(true))
    .catch((error) => res.send(error.message))
};