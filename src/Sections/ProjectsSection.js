import React from 'react';
import data from '../Components/projects.json';
import { ProjectList } from '../Styles/ProjectSection';
import { SingleProject } from '../Components/SingleProject';
import { ProjectContainer } from '../Styles/Sections';
import { BigTitle } from '../Styles/Fonts';

export const ProjectsSection = () => {
  return (
    <ProjectContainer id="projects">
      <BigTitle>Projects</BigTitle>
      <ProjectList>
        {data.reverse().map((project) => (
          <SingleProject key={project.id} project={project} />
        ))}

      </ProjectList>
    </ProjectContainer>
  )
};