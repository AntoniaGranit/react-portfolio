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
          <SkillsLi>Postman</SkillsLi>
          <SkillsLi>MongoDB Compass</SkillsLi>
          <SkillsLi>Figma</SkillsLi>
          <SkillsLi>Slack</SkillsLi>
          <SkillsLi>Discord</SkillsLi>
          <SkillsLi>Adobe Photoshop</SkillsLi>
          <SkillsLi>Adobe Illustrator</SkillsLi>
        </SkillsUl>
        <SkillsUl>
          <SkillsPink>More</SkillsPink>
          <SkillsLi>Pair/Mob-Programming</SkillsLi>
          <SkillsLi>UX/UI Design</SkillsLi>
          <SkillsLi>Agile Methodology</SkillsLi>
          <SkillsLi>Concept Development</SkillsLi>
        </SkillsUl>
        <SkillsUl>
          <SkillsPink>Upcoming</SkillsPink>
          <SkillsLi>TypeScript</SkillsLi>
          <SkillsLi>React Native</SkillsLi>
          <SkillsLi>Python</SkillsLi>
        </SkillsUl>
      </SkillsLists>
    </SkillsContainer>
  )
}