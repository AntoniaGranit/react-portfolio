import React from 'react';
import { ProjectWrapper, ProjectInformation, ProjectScreenshot } from '../Styles/ProjectSection';
import { Paragraph, BlackTitle } from '../Styles/Fonts';
import { Button, ButtonContainer } from '../Styles/Buttons';

export const SingleProject = ({ project }) => {
  const renderDescriptionWithLink = (description) => {
    const dribbbleUrl = 'https://dribbble.com/shots/14967815-Notes-App-concept';
    return description.replace('here', `<a href="${dribbbleUrl}" target="_blank" rel="noreferrer" id="dribbble-link">here</a>`);
  };

  return (
    <ProjectWrapper key={project.id}>
      <ProjectScreenshot
        src={project.screenshot} />
      <ProjectInformation>
        <BlackTitle>{project.title}</BlackTitle>

        {/* <Paragraph>{project.description}</Paragraph> */}
        <Paragraph dangerouslySetInnerHTML={{ __html:
          renderDescriptionWithLink(project.description) }} />

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