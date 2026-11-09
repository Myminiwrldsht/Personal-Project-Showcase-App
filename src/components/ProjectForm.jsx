import React, {useState} from 'react';



export default function ProjectForm({onAddProject}) {
    const [title, setTitle]=useState('');
    const [description, setDescription]= useState('');

function handleSubmit(event) {
    event.preventDefault();

    if(title.trim() === '' || description.trim() === '' ) {
        return;
    }
    onAddProject({title, description});
    setTitle('');
    setDescription('');
}
return (
    <form className='project-form' onSubmit={handleSubmit}>
        <h2>Add Project</h2>
        <label htmlFor='project-title' className='title-label'>Title</label>
        <input id='project-title' type='text' value={title} onChange={(event) => setTitle(event.target.value)} placeholder='Project name...'/>
        <label htmlFor='project-description' className='description-label'>Description</label>
        <textarea id='project-description'  value={description} onChange={(event)=> setDescription(event.target.value)} placeholder='project description...'/>
        <button type='submit'>Add</button>
    </form>
  
);
}
