import React, {useState} from 'react';
import Header from './components/Header';
import ProjectList from './components/ProjectList';
import SearchBar from './components/SearchBar';
import './App.css'

function App() {
  const [projects, setProjects]= useState(
    [
      {id: 1, title:'Project 1', description: 'A personal expense tracker'},
      {id:2, title: 'Project 2', description:'A personal portfolio website'}

    ]
  );
  const [searchTerm, setSearchTerm]= useState('');

  return (
    <>
      <Header/>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
      <ProjectList projects={projects}/>
    </>
  )
}

export default App
