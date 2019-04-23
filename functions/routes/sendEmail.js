const { sender } = require('../utils/sender');
const { isHumanOrBot } = require('../utils/isHumanOrBot');

exports.sendEmail = function(req, res) {
  isHumanOrBot(req.body.token)
  .then((res) => res.json())
  .then((res) => {
    if (res.success)
      return sender(req.body);
    throw Error('Is not a human');
  })
  .then((data) => res.send(data))
  .catch((error) => res.send({
    errorMessage: error.message,
  }));
};