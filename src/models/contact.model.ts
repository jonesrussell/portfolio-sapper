import mongoose, { Schema, Document } from 'mongoose';

export interface IContact extends Document {
  email: string;
  message: string;
}

const ContactSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  }
});

// return IContact interface
export default mongoose.model<IContact>('Contact', ContactSchema);
