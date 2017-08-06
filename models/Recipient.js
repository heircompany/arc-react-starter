const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipientSchema = new Schema({
  email: String,
  clicked: { type: Boolean, default: false }
});

// this is a subdocument model -> just export it
module.exports = recipientSchema;
