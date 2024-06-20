import {sendEmail}  from './middleware/nodemailerUtil.js';

export const postContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    await sendEmail(name, email, message)
    res.status(200).send('Email sent');
  } catch (err) {
    res.status(404).send('[server side] Could not send email')
  }

};


export const postWorldPay = async (req, res) => {

}