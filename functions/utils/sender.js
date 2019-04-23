const postmark = require('postmark');

exports.sender = function({name, from, to, subject, message}) {
  const client = new postmark.ServerClient('7cf6690b-d490-483e-ab49-75a81a7bed37');

  return client.sendEmail({
    From: `no-reply@minka.io`,
    To: to || 'luis@minka.io',
    Subject: subject || 'minka web site',
    TextBody: `User ${name} with email address: ${from} sent the next message ${message}`,
  });
}