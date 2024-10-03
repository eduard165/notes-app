import React from 'react';
import Note from './Note';

const NoteList = ({ notes, onEdit, onDelete, onArchive }) => {
  return (
    <div>
      {notes.map(note => (
        <Note
          key={note.id}
          note={note}
          onEdit={onEdit}
          onDelete={onDelete}
          onArchive={onArchive}
        />
      ))}
    </div>
  );
};

export default NoteList;