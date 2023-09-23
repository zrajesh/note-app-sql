import express from "express";
import { createNote, getNote, getNotes } from "./database.js";
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get('/notes', async (req, res) => {
  const notes = await getNotes();
  res.send(notes);
});

app.get('/note/:id', async (req, res) => {
  const id = req.params.id
  const note = await getNote(id);
  res.send(note);
});

app.post('/createnote', async (req, res) => {
  const {title, contents} = req.body;
  const note = await createNote(title, contents);
  res.status(201).send(note); 
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
