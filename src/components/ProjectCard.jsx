import React from 'react';

export default function ProjectCard({title, description}) {
    return (
    <div className='project-card'> 
    <div className='project-image'></div>
       <h3>{title}</h3>
    <p>{description}</p>
    </div>
 
);
}