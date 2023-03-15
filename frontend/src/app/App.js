import React, {useState} from 'react';
import './App.css';
import { SiteNavbar } from '../navbar/Navbar.js'
import { Search } from '../search/Search.js'
import { ResultBox } from '../resultBox/ResultBox.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import dictionaryLogo from './images/dictionary-logo.jpeg';


export default function App() {
  const [searchType, setSearchType] = useState('Dictionary')
  const [apiData, setApiData] = useState(null)

  const handleSearchTypeChange = (switchSearchType) => {
    setSearchType(switchSearchType)
  }

  const handleApiData = (data) => {
    setApiData(data)
    console.log(apiData)
  }
  
  return(
    <>
      <div className="App">
        <SiteNavbar fixed="top" 
        onThesaurusClick={() => handleSearchTypeChange('Thesaurus')}
        onDictionaryClick={() => handleSearchTypeChange('Dictionary')}
        />
        <div className='App-logo'>
          <img src={dictionaryLogo} alt="BigCo Inc. logo"/>
        </div>
        <Search searchType={searchType} onFetchData={handleApiData}/>
        {apiData != null && <ResultBox wordData={apiData}/>}
      </div>
    </>
  )
}
