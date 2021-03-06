import { Schema, Model, model } from 'mongoose';

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

class Contact extends Model {
  constructor() {
    super("Contact");
  }
}

export default model(Contact, contactSchema, 'contact');
