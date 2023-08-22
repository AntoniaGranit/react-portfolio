import React from 'react';
import { SkillsContainer } from '../Styles/Sections';
import { SkillTitleWrapper, SkillsLists, SkillsUl, SkillsLi } from '../Styles/SkillSection';
import { BigTitle, SkillsPink } from '../Styles/Fonts';

export const SkillSection = () => {
  return (
    <SkillsContainer id="skills">
      <SkillTitleWrapper><BigTitle>Skills</BigTitle></SkillTitleWrapper>
      <SkillsLists>
        <SkillsUl>
          <SkillsPink>Frontend</SkillsPink>
          <SkillsLi>HTML5</SkillsLi>
          <SkillsLi>CSS3</SkillsLi>
          <SkillsLi>Javascript ES6</SkillsLi>
          <SkillsLi>React</SkillsLi>
          <SkillsLi>Redux</SkillsLi>
          <SkillsLi>Styled Components</SkillsLi>
          <SkillsLi>React Native</SkillsLi>
        </SkillsUl>
        <SkillsUl>
          <SkillsPink>Backend</SkillsPink>
          <SkillsLi>Node.js</SkillsLi>
          <SkillsLi>MongoDB</SkillsLi>
          <SkillsLi>Express</SkillsLi>
          <SkillsLi>RESTful API:s</SkillsLi>
        </SkillsUl>
        <SkillsUl>
          <SkillsPink>Toolbox</SkillsPink>
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
          <SkillsPink>More</SkillsPink>
          <SkillsLi>Agile Methodology</SkillsLi>
          <SkillsLi>UX/UI Design</SkillsLi>
          <SkillsLi>Web Accessibility</SkillsLi>
          <SkillsLi>Responsive Design</SkillsLi>
          <SkillsLi>Pair-Programming</SkillsLi>
          <SkillsLi>Mob-Programming</SkillsLi>
        </SkillsUl>
        <SkillsUl>
          <SkillsPink>Upcoming</SkillsPink>
          <SkillsLi>TypeScript</SkillsLi>
          <SkillsLi>Next.js</SkillsLi>
          <SkillsLi>Bootstrap</SkillsLi>
        </SkillsUl>
      </SkillsLists>
    </SkillsContainer>
  )
}