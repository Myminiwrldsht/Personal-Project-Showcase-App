import React from 'react';

export default function ProjectCard({title, description}) {
    return (
    <div className='project-card'> 
    <div className='project-image'></div>
    <div className='project-text'>
       <h3>{title}</h3>
    <p>{description}</p>
    </div>
    </div>
 
);
}