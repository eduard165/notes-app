import React from 'react';
import { Form } from 'react-bootstrap';

const FilterBar = ({ categories, activeFilter, onFilterChange }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>Filter by Category</Form.Label>
      <Form.Select
        value={activeFilter || ''}
        onChange={(e) => onFilterChange(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
};

export default FilterBar;