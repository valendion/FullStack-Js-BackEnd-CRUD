import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import NoteRoute from './routes/NoteRoute.js';

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/notes_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database connected...'));

app.use(cors());
app.use(express.json());
app.use(NoteRoute);

app.listen(5000, () => console.log('Server running...'));
