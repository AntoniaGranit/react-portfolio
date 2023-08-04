import React from 'react';
import { ProjectWrapper, ProjectInformation, ProjectTitle, ProjectScreenshot, ProjectButtons } from '../Styles/ProjectSection';
import { Paragraph, BlackTitle } from '../Styles/Fonts';
import { ProjectButton } from '../Styles/Buttons';

export const SingleProject = ({ project }) => {
  return (
    <ProjectWrapper key={project.id}>
      <ProjectScreenshot
        src={project.screenshot} />
      <ProjectInformation>
        <ProjectTitle>
          <BlackTitle>{project.title}</BlackTitle>
        </ProjectTitle>

        <Paragraph>{project.description}</Paragraph>
        <ProjectButtons>
          <a
            href={project.netlify}
            target="_blank"
            rel="noreferrer">
            <ProjectButton netlify type="button">
              View Live
            </ProjectButton>
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer">
            <ProjectButton github type="button">
              View Code
            </ProjectButton>
          </a>
        </ProjectButtons>
      </ProjectInformation>
    </ProjectWrapper>
  )
}