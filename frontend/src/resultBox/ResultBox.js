import Accordion from 'react-bootstrap/Accordion';
import ReactAudioPlayer from 'react-audio-player';
require('./ResultBox.css')

export function ResultBox({wordData, searchType}) {
  if (!wordData) {
    return null;
  }

  const phoneticsArray = wordData.phonetics
  const lastPhoneticsObject = phoneticsArray[phoneticsArray.length - 1]
  const audioLink = lastPhoneticsObject.audio
  
  return (
    <div className='result-box-container'>
      <Accordion id='result-box'>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Definition</Accordion.Header>
          <Accordion.Body>
          <h2 className='word'>{`'${wordData.word}'`}</h2>
            {wordData.meanings.map(meaning => (
              <div key={meaning.partOfSpeech}>
                <h3>{meaning.partOfSpeech}</h3>
                {meaning.definitions.map(definition => (
                  <div className='definition' key={definition.definition}>
                    <p>{definition.definition}</p>
                    {definition.example && <li><em>Example:</em> {definition.example}</li>}
                  </div>
                ))}
              </div>
            ))}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Pronounciation</Accordion.Header>
          <Accordion.Body>
          <h2 className='word'>{`'${wordData.word}' - ${wordData.phonetic}`}</h2>
          <ReactAudioPlayer
            src={audioLink}
            controls
          />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
