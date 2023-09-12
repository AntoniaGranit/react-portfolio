import React from 'react';
import { SkillsContainer } from '../Styles/Sections';
import { SkillsLists, SkillsUl, SkillsLi } from '../Styles/SkillSection';
import { BigTitle, SkillsTitle } from '../Styles/Fonts';

export const SkillSection = () => {
  return (
    <SkillsContainer id="skills">
      <BigTitle>Skills</BigTitle>
      <SkillsLists>
        <SkillsUl>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillsLi>HTML5</SkillsLi>
          <SkillsLi>CSS3</SkillsLi>
          <SkillsLi>Javascript ES6</SkillsLi>
          <SkillsLi>React</SkillsLi>
          <SkillsLi>Redux</SkillsLi>
          <SkillsLi>Styled Components</SkillsLi>
          <SkillsLi>React Native</SkillsLi>
        </SkillsUl>
        <SkillsUl>
          <SkillsTitle>Backend</SkillsTitle>
          <SkillsLi>Node.js</SkillsLi>
          <SkillsLi>MongoDB</SkillsLi>
          <SkillsLi>Express</SkillsLi>
          <SkillsLi>RESTful API:s</SkillsLi>
        </SkillsUl>
        <SkillsUl>
          <SkillsTitle>Toolbox</SkillsTitle>
          <SkillsLi>Visual Studio Code</SkillsLi>
          <SkillsLi>GitHub</SkillsLi>
          <SkillsLi>Git</SkillsLi>
          <SkillsLi>Google Cloud</SkillsLi>
          <SkillsLi>Postman</SkillsLi>
          <SkillsLi>MongoDB Compass</SkillsLi>
          <SkillsLi>Figma</SkillsLi>
          <SkillsLi>Slack</SkillsLi>
          <SkillsLi>Adobe Photoshop</SkillsLi>
        </SkillsUl>
        <SkillsUl>
          <SkillsTitle>More</SkillsTitle>
          <SkillsLi>Agile Methodology</SkillsLi>
          <SkillsLi>UX/UI Design</SkillsLi>
          <SkillsLi>Web Accessibility</SkillsLi>
          <SkillsLi>Responsive Design</SkillsLi>
          <SkillsLi>Pair-Programming</SkillsLi>
          <SkillsLi>Mob-Programming</SkillsLi>
        </SkillsUl>
        <SkillsUl>
          <SkillsTitle>Learning</SkillsTitle>
          <SkillsLi>TypeScript</SkillsLi>
          <SkillsLi>Next.js</SkillsLi>
          <SkillsLi>Tailwind CSS</SkillsLi>
        </SkillsUl>
      </SkillsLists>
    </SkillsContainer>
  )
}