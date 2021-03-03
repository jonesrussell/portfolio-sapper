const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema(
  {
    email: {
      type: String
    },
    message: {
      type: String
    }
  },
  { collection: "Contacts" }
);

module.exports = mongoose.model('contact', contactSchema);
