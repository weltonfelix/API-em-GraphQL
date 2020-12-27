import mongoose from 'mongoose';

interface ICategoryModel extends mongoose.Document{
  name: string;
  description: string;
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
});

export default mongoose.model<ICategoryModel>('Categories', Schema);
