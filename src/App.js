import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Cambia Switch y Redirect
import HomePage from './pages/HomePage';
import ArchivedPage from './pages/ArchivedPage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './componentes/PrivateRoute';

function App() {
  const [user, setUser] = useState(null);
  const [notes, setNotes] = useState([]);

  // Load user and notes from localStorage on initial render
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    const savedNotes = JSON.parse(localStorage.getItem('notes') || '[]');
    if (savedUser) setUser(savedUser);
    setNotes(savedNotes);
  }, []);

  // Save notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const updateNotes = (updatedNote) => {
    setNotes(notes => notes.find(note => note.id === updatedNote.id)
      ? notes.map(note => note.id === updatedNote.id ? updatedNote : note)
      : [...notes, updatedNote]
    );
  };

  const handleDeleteNote = (noteId) => {
    setNotes(notes.filter(note => note.id !== noteId));
  };

  const handleArchiveNote = (noteId) => {
    setNotes(notes.map(note => 
      note.id === noteId ? { ...note, archived: !note.archived } : note
    ));
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={user ? (
            <HomePage
              user={user}
              notes={notes.filter(note => !note.archived)}
              onLogout={handleLogout}
              onSaveNote={updateNotes}
              onDeleteNote={handleDeleteNote}
              onArchiveNote={handleArchiveNote}
            />
          ) : (
            <Navigate to="/login" />
          )}
        />

        <Route
          path="/archived"
          element={user ? (
            <ArchivedPage
              user={user}
              notes={notes.filter(note => note.archived)}
              onLogout={handleLogout}
              onDeleteNote={handleDeleteNote}
              onArchiveNote={handleArchiveNote}
            />
          ) : (
            <Navigate to="/login" />
          )}
        />

        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <LoginPage onLogin={handleLogin} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
