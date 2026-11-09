import React, {useState} from 'react';
import Header from './components/Header';
import ProjectList from './components/ProjectList';
import SearchBar from './components/SearchBar';
import ProjectForm from './components/ProjectForm';
import './App.css'

function App() {
  const [projects, setProjects]= useState(
    [
      {id: 1, title:'Project 1', description: 'A personal expense tracker'},
      {id:2, title: 'Project 2', description:'A personal portfolio website'}

    ]
  );

  const [searchTerm, setSearchTerm]= useState('');


const filteredProjects = projects.filter((project) => {
  return (
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
});

function handleAddProject(newProject) {
  const project = {id: Date.now(), title: newProject.title, description:newProject.description};
  setProjects([...projects, project]);
}
  return (
    <div className='container py-4 '>
      <Header/>
      <ProjectForm onAddProject={handleAddProject}/>
      <div className='search-card'>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
      <ProjectList projects={filteredProjects}/>
      </div>

    </div>
  )
}

export default App
