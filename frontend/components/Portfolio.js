// components/Portfolio.js
import React from 'react';
import Project from './Project';
import projectsData from '../data/ProjectsData';

const Portfolio = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {projectsData.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Portfolio;
