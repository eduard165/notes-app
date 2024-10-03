import React from 'react';
import NoteList from './NoteList';

const ArchivedNotes = ({ notes, onEdit, onDelete, onArchive }) => {
  const archivedNotes = notes.filter(note => note.archived);

  return (
    <div>
      <h2>Archived Notes</h2>
      <NoteList
        notes={archivedNotes}
        onEdit={onEdit}
        onDelete={onDelete}
        onArchive={onArchive}
      />
    </div>
  );
};

export default ArchivedNotes;