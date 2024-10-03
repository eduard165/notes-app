import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';

const Note = ({ note, onEdit, onDelete, onArchive }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{note.title}</Card.Title>
        <Card.Text>{note.content}</Card.Text>
        <div className="mb-2">
          {note.categories.map((category, index) => (
            <Badge bg="secondary" key={index} className="me-1">
              {category}
            </Badge>
          ))}
        </div>
        <Button variant="primary" size="sm" onClick={() => onEdit(note)} className="me-2">
          Edit
        </Button>
        <Button variant="danger" size="sm" onClick={() => onDelete(note.id)} className="me-2">
          Delete
        </Button>
        <Button variant="secondary" size="sm" onClick={() => onArchive(note.id)}>
          {note.archived ? 'Unarchive' : 'Archive'}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Note;