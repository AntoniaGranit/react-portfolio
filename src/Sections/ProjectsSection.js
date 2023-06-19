import React from 'react';
import data from '../Components/projects.json';
import { ProjectList } from '../Styles/ProjectSection';
import { SingleProject } from '../Components/SingleProject';
import { ProjectContainer } from '../Styles/Sections';

export const ProjectsSection = () => {
  return (
    <ProjectContainer>
      <ProjectList>
        {data.map((project) => (
          <SingleProject project={project} />
        ))}
      </ProjectList>
    </ProjectContainer>
  )
};