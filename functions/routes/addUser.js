const firebase = require('firebase-admin');
const { isHumanOrBot } = require('../utils/isHumanOrBot');
const { sender } = require('../utils/sender');

const imgPath = 'https://firebasestorage.googleapis.com/v0/b/minka-web.appspot.com/o/mail.png?alt=media&token=30729b35-50b3-49cd-bde9-9b4338077e55';
const subject = 'Minka Hackathon'
const message = `<img src="${imgPath}" alt="Confirmation - Minka Hackathon" >`;

exports.addUser = function (req, res) {
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
          .collection('participants')
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