// import { useState } from 'react'
// import './App.css'
import Nav from './components/nav'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CharacterList from './components/ui/CharacterList';
import CharacterDetail from './components/ui/CharacterDetail';
import CharacterLocation from './components/ui/CharacterLocation';
import { APIProvider } from './context/Character';



function App() {

  return (
    <APIProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<CharacterList />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
          <Route path="/location" element={<CharacterLocation />} />
        </Routes>
      </Router>
    </APIProvider>
  )
}

export default App
