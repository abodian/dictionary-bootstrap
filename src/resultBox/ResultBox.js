import Accordion from 'react-bootstrap/Accordion';
require('./ResultBox.css')

export function ResultBox() {
  return (
    <div className='result-box-container'>
      <Accordion id='result-box'>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Definition</Accordion.Header>
          <Accordion.Body>
            Definition goes here
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Pronounciation</Accordion.Header>
          <Accordion.Body>
            Link to phoentics
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Example Usage</Accordion.Header>
          <Accordion.Body>
            Example Usage goes here
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
