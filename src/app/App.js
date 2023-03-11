import React from 'react';
import './App.css';
import { SiteNavbar } from '../navbar/Navbar.js'
import { Search } from '../search/Search.js'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return(
    <>
      <div className="App">
        <SiteNavbar fixed="top"/>
        <Search />
      </div>
    </>
  )
}
