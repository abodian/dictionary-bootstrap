import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
require('./Search.css')

export function Search() {
  return(
    <div className="search-container">
      <InputGroup className="mb-3" id="word-search">
        <Form.Control
          placeholder="Which word would you like to define?"
          aria-label="word"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Get Definition
        </Button>
      </InputGroup>
    </div>
  )
}