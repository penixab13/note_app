// src/App.js
import React, { useState, useEffect } from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import api from './components/api';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [noteToEdit, setNoteToEdit] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const response = await api.get('/notes');
    setNotes(response.data);
  };

  const addNote = async (note) => {
    if (note.id) {
      await api.put(`/notes/${note.id}`, note);
    } else {
      await api.post('/notes', note);
    }
    fetchNotes();
    setNoteToEdit(null);
  };

  const editNote = (note) => {
    setNoteToEdit(note);
  };

  const deleteNote = async (id) => {
    await api.delete(`/notes/${id}`);
    fetchNotes();
  };

  return (
    <div className="app">
      <h1>Notes</h1>
      <NoteForm onSubmit={addNote} noteToEdit={noteToEdit} />
      <NoteList notes={notes} onEdit={editNote} onDelete={deleteNote} />
    </div>
  );
};

export default App;
