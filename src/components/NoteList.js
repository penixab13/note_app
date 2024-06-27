// src/components/NoteList.js
import React, { useEffect, useState } from 'react';
import api from '../api';
import Note from './Note';
import NoteForm from './NoteForm';

const NoteList = () => {
  const [notes, setNotes] = useState([]);
  const [editNote, setEditNote] = useState(null);

  const fetchNotes = async () => {
    try {
      const response = await api.get('/notes');
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes', error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div>
      <h1>Notes</h1>
      <NoteForm fetchNotes={fetchNotes} editNote={editNote} />
      <ul>
        {notes.map((note) => (
          <li key={note.noteID}>
            <Note note={note} fetchNotes={fetchNotes} />
            <button onClick={() => setEditNote(note)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
