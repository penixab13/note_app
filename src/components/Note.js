// src/components/Note.js
import React from 'react';
import api from './components/api';

const Note = ({ note, fetchNotes }) => {
  const handleDelete = async () => {
    try {
      await api.delete(`/notes/${note.noteID}`);
      fetchNotes();
    } catch (error) {
      console.error('Error deleting note', error);
    }
  };

  return (
    <div>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Note;
