import React from 'react';
import { ProjectWrapper, ProjectInformation, ProjectTitle, ProjectScreenshot, ProjectButtons } from '../Styles/ProjectSection';
import { Paragraph, CodeLanguages, BlackTitle, Black } from '../Styles/Fonts';
import { LiveDemoButton, ViewCodeButton } from '../Styles/Buttons';

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
        {project.codelanguages.map((language) => (
          <CodeLanguages><Black>{language}</Black></CodeLanguages>
        ))}
        <ProjectButtons>
          <a
            href={project.netlify}
            target="_blank"
            rel="noreferrer">
            <LiveDemoButton type="submit">
              <i className="fa fa-globe" />Live demo
            </LiveDemoButton>
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer">
            <ViewCodeButton type="submit">
              <i className="fa fa-github" />View code
            </ViewCodeButton>
          </a>
        </ProjectButtons>
      </ProjectInformation>
    </ProjectWrapper>
  )
}