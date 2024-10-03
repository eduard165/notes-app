import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const NoteEditor = ({ note, onSave, onCancel }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [categories, setCategories] = useState('');

  // Rellenar los campos si estamos editando una nota existente
  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
      setCategories(note.categories.join(', '));
    } else {
      // Limpiar los campos si no hay una nota (nuevo estado)
      setTitle('');
      setContent('');
      setCategories('');
    }
  }, [note]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      id: note ? note.id : Date.now(),
      title,
      content,
      categories: categories.split(',').map(cat => cat.trim()), // Convertir categorías a un array
      archived: note ? note.archived : false
    });

    // Limpiar los campos después de guardar
    setTitle('');
    setContent('');
    setCategories('');
  };

  const handleCancel = () => {
    // Limpiar los campos al cancelar
    setTitle('');
    setContent('');
    setCategories('');
    onCancel(); // Llama a la función de cancelación
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Categories (comma-separated)</Form.Label>
        <Form.Control
          type="text"
          value={categories}
          onChange={(e) => setCategories(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="me-2">
        Save
      </Button>
      <Button variant="secondary" onClick={handleCancel}>
        Cancel
      </Button>
    </Form>
  );
};

export default NoteEditor;
