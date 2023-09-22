import {sendEmail}  from './middleware/nodemailerUtil.js';

export const postContact = async (req, res) => {
  console.log('what is req.body', req.body)

  try {
    const { name, email, message } = req.body;
    await sendEmail(name, email, message)
    res.status(200).send('confirmed email');
  } catch (err) {
    res.status(404).send('[server side] Could not send email')
  }

};
