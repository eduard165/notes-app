// services/noteService.js

export const getNotes = () => {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    return notes;
  };
  
  export const saveNote = (note) => {
    const notes = getNotes();
    const noteIndex = notes.findIndex(n => n.id === note.id);
    if (noteIndex > -1) {
      notes[noteIndex] = note; // Actualiza la nota si ya existe
    } else {
      notes.push(note); // Añade una nueva nota si no existe
    }
    localStorage.setItem('notes', JSON.stringify(notes));
  };
  
  export const deleteNote = (noteId) => {
    const notes = getNotes();
    const filteredNotes = notes.filter(note => note.id !== noteId);
    localStorage.setItem('notes', JSON.stringify(filteredNotes));
  };
  
  export const archiveNote = (noteId) => {
    const notes = getNotes();
    const updatedNotes = notes.map(note => 
      note.id === noteId ? { ...note, archived: !note.archived } : note
    );
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };
  