import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Header from '../componentes/Header';
import NoteList from '../componentes/NoteList';
import NoteEditor from '../componentes/NoteEditor';
import FilterBar from '../componentes/FilterBar';
import ConfirmationDialog from '../componentes/ConfirmacionDialog';
import { getNotes, saveNote, deleteNote, archiveNote } from '../services/noteService';

const HomePage = ({ user, onLogout }) => {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);
  const [activeFilter, setActiveFilter] = useState('');
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState(null);
  const [showArchived, setShowArchived] = useState(false); // Nuevo estado para controlar si se muestran las notas archivadas

  useEffect(() => {
    setNotes(getNotes()); // Cargar notas desde el servicio
  }, []);

  const handleSaveNote = (savedNote) => {
    saveNote(savedNote); // Guardar nota usando el servicio
    setNotes(getNotes());
    setEditingNote(null);
  };

  const handleDeleteNote = (noteId) => {
    setNoteToDelete(noteId);
    setShowConfirmDialog(true);
  };

  const confirmDelete = () => {
    deleteNote(noteToDelete); // Borrar nota usando el servicio
    setNotes(getNotes());
    setShowConfirmDialog(false);
    setNoteToDelete(null);
  };

  const handleArchiveNote = (noteId) => {
    archiveNote(noteId); // Archivar nota usando el servicio
    setNotes(getNotes());
  };

  // Filtrar notas activas o archivadas dependiendo del estado
  const displayedNotes = showArchived
    ? notes.filter(note => note.archived)  // Mostrar notas archivadas
    : notes.filter(note => !note.archived); // Mostrar notas activas

  const categories = [...new Set(notes.flatMap(note => note.categories))];
  const filteredNotes = activeFilter ? displayedNotes.filter(note => note.categories.includes(activeFilter)) : displayedNotes;

  return (
    <div>
      <Header user={user} onLogout={onLogout} />
      <Container className="mt-4">
        <Row>
          <Col md={4}>
            <FilterBar
              categories={categories}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
            <NoteEditor
              note={editingNote}
              onSave={handleSaveNote}
              onCancel={() => setEditingNote(null)}
            />
          </Col>
          <Col md={8}>
            {/* Botón para alternar entre notas activas y archivadas */}
            <Button
              variant={showArchived ? 'secondary' : 'primary'}
              onClick={() => setShowArchived(!showArchived)}
              className="mb-3"
            >
              {showArchived ? 'Mostrar Notas Activas' : 'Mostrar Notas Archivadas'}
            </Button>
            <h2>{showArchived ? 'Notas Archivadas' : 'Notas Activas'}</h2>
            <NoteList
              notes={filteredNotes}
              onEdit={setEditingNote}
              onDelete={handleDeleteNote}
              onArchive={handleArchiveNote}
            />
          </Col>
        </Row>
      </Container>
      <ConfirmationDialog
        show={showConfirmDialog}
        onClose={() => setShowConfirmDialog(false)}
        onConfirm={confirmDelete}
        message="Are you sure you want to delete this note?"
      />
    </div>
  );
};

export default HomePage;
