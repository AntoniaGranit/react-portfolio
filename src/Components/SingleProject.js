import React from 'react';
import { ProjectWrapper, ProjectInformation, ProjectScreenshot } from '../Styles/ProjectSection';
import { Paragraph, BlackTitle } from '../Styles/Fonts';
import { Button, ButtonContainer } from '../Styles/Buttons';

export const SingleProject = ({ project }) => {
  return (
    <ProjectWrapper key={project.id}>
      <ProjectScreenshot
        src={project.screenshot} />
      <ProjectInformation>
        <BlackTitle>{project.title}</BlackTitle>

        <Paragraph>{project.description}</Paragraph>
        <ButtonContainer>
          <a
            href={project.netlify}
            target="_blank"
            rel="noreferrer">
            <Button type="button">
              View Live
            </Button>
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer">
            <Button type="button">
              View Code
            </Button>
          </a>
        </ButtonContainer>
      </ProjectInformation>
    </ProjectWrapper>
  )
}