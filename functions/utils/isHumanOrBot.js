const FormData = require('form-data');
const fetch = require('node-fetch');

const RECAPTCHA_SECRET = '6LdT158UAAAAAIIKT5lC7YjSVPpP4CsrRBWsp4em';
const RECAPTCHA_API = 'https://www.google.com/recaptcha/api/siteverify';

exports.isHumanOrBot = function(recaptchaToken) {

  let formData = new FormData();
  formData.append('secret', RECAPTCHA_SECRET);
  formData.append('response', recaptchaToken);
  
  return fetch(RECAPTCHA_API, {
    method: 'POST',
    body: formData,
  });
};