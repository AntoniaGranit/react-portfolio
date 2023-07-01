import React from 'react';
import data from '../Components/projects.json';
import { ProjectList } from '../Styles/ProjectSection';
import { SingleProject } from '../Components/SingleProject';
import { ProjectContainer } from '../Styles/Sections';
import { BigTitle } from '../Styles/Fonts';

export const ProjectsSection = () => {
  return (
    <ProjectContainer id="projects">
      <ProjectList>
        <BigTitle>Featured projects</BigTitle>
        {data.reverse().map((project) => (
          <SingleProject project={project} />
        ))}
      </ProjectList>
    </ProjectContainer>
  )
};