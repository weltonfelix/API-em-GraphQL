import mongoose from 'mongoose';

interface IVideoModel extends mongoose.Document{
  name: string;
  description: string;
  category: string;
}

const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categories'
  }
});

export default mongoose.model<IVideoModel>('Videos', Schema);
