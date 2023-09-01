import mongoose from 'mongoose';

const Note = mongoose.Schema({
  date: {
    type: Date,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
});

export default mongoose.model('Notes', Note);
