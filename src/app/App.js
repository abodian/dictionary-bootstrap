import React, {useState} from 'react';
import './App.css';
import { SiteNavbar } from '../navbar/Navbar.js'
import { Search } from '../search/Search.js'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [searchType, setSearchType] = useState('Dictionary')

  const handleSearchTypeChange = (switchSearchType) => {
    setSearchType(switchSearchType)
  }
  
  return(
    <>
      <div className="App">
        <SiteNavbar fixed="top" 
        onThesaurusClick={() => handleSearchTypeChange('Thesaurus')}
        onDictionaryClick={() => handleSearchTypeChange('Dictionary')}
        />
        <Search searchType={searchType}/>
      </div>
    </>
  )
}
