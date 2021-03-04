import { Schema, model } from 'mongoose';

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

export default model('contactModel', contactSchema);
