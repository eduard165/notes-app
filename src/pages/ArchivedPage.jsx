import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../componentes/Header';
import NoteList from '../componentes/NoteList';
import ConfirmationDialog from '../componentes/ConfirmacionDialog';

const ArchivedPage = ({ user, onLogout }) => {
  const [notes, setNotes] = useState([]);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState(null);

  // Load notes from localStorage on component mount
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes') || '[]');
    setNotes(savedNotes);
  }, []);

  // Save notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleDeleteNote = (noteId) => {
    setNoteToDelete(noteId);
    setShowConfirmDialog(true);
  };

  const confirmDelete = () => {
    setNotes(notes.filter(note => note.id !== noteToDelete));
    setShowConfirmDialog(false);
    setNoteToDelete(null);
  };

  const handleUnarchiveNote = (noteId) => {
    setNotes(notes.map(note => 
      note.id === noteId ? { ...note, archived: false } : note
    ));
  };

  const archivedNotes = notes.filter(note => note.archived);

  return (
    <div>
      <Header user={user} onLogout={onLogout} />
      <Container className="mt-4">
        <h2>Archived Notes</h2>
        <NoteList
          notes={archivedNotes}
          onEdit={() => {}} // No editing in archive view
          onDelete={handleDeleteNote}
          onArchive={handleUnarchiveNote}
        />
      </Container>
      <ConfirmationDialog
        show={showConfirmDialog}
        onClose={() => setShowConfirmDialog(false)}
        onConfirm={confirmDelete}
        message="Are you sure you want to delete this archived note?"
      />
    </div>
  );
};

export default ArchivedPage;