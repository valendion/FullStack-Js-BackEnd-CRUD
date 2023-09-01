import Note from '../models/NoteModels.js';

export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    res.json(note);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const saveNote = async (req, res) => {
  const note = new Note(req.body);
  try {
    const insertNote = await note.save();
    res.status(201).json(insertNote);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateNote = async (req, res) => {
  try {
    const updateNote = await Note.updateOne(
      {
        _id: req.params.id,
      },
      { $set: req.body }
    );
    res.status(200).json(updateNote);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const daleteNote = await Note.deleteOne({
      _id: req.params.id,
    });
    res.status(200).json(daleteNote);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
