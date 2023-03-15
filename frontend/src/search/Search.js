import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
require('./Search.css')

export function Search({searchType, onFetchData}) {
  const [word, setWord] = useState('');

  const handleDictionarySubmit = async (event) => {
    event.preventDefault();
    const url = `https://albo-dictionary-backend.onrender.com/dictionary/${word}`;
    const response = await fetch(url);
    const data = await response.json();
    onFetchData(data.responseData[0])
  }

  const handleThesaurusSubmit = async (event) => {
    event.preventDefault();
    const url = `https://albo-dictionary-backend.onrender.com/thesaurus/${word}`;
    const response = await fetch(url);
    const data = await response.json();
    onFetchData(data.responseData)
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchType === 'Dictionary' ? handleDictionarySubmit(event) : handleThesaurusSubmit(event);
    }
  }

  return searchType === 'Dictionary' ? 
  (
    <div className="search-container">
      <InputGroup className="mb-3" id="word-search">
        <Form.Control
          className='word-search-input'
          placeholder="Dictionary"
          aria-label="word"
          aria-describedby="basic-addon2"
          value={word}
          onChange={(event) => setWord(event.target.value)}
          onKeyDown={handleKeyPress}
        />
        <Button 
          variant="outline-secondary" 
          id="button-addon2"
          onClick={handleDictionarySubmit}
        >
          Define
        </Button>
      </InputGroup>
    </div>
  )
  :
  (
    <div className="search-container">
      <InputGroup className="mb-3" id="word-search">
        <Form.Control
          className='word-search-input'
          placeholder="Thesaurus"
          aria-label="word"
          aria-describedby="basic-addon2"
          onChange={(event) => setWord(event.target.value)}
          onKeyDown={handleKeyPress}
        />
        <Button 
          variant="outline-secondary" 
          id="button-addon2"
          onClick={handleThesaurusSubmit}
        >
          Get Synonyms
        </Button>
    </InputGroup>
  </div>
  )
}