const mail = require('@sendgrid/mail')

mail.setApiKey(process.env.SENDGRID_API_KEY)

const mailMessage = (req, res) => {
  const body = JSON.parse(req.body);
  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;

  const data = {
    to: 'gomezbateman@yahoo.com',
    from: 'hello@andrewbateman.org',
    subject: 'New web form message',
    text: message,
    html: message.replace(/\r\n/g, '<br>')
  }

  mail.send(data);

  res.status(200).json({ status: 'Ok' });
}

// For sent acknowledgement: use the useState hook and set a "sent" state after the request finishes, 
// then use to control what's displayed on the page

export default mailMessage;
