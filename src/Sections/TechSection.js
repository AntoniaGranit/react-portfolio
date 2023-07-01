import React from 'react';
import { TechContainer } from '../Styles/Sections';
import { TechDiv } from '../Styles/TechSection';
import { BigTitle, Paragraph, Pink } from '../Styles/Fonts';

export const TechSection = () => {
  return (
    <TechContainer id="tech">
      <TechDiv>
        <BigTitle>Tech_</BigTitle>
        <Paragraph>
        HTML, CSS, Flexbox, <Pink>JavaScript ES6</Pink>, JSX, Responsive Design,
        Web Accessibility, <Pink>React</Pink>, Styled
        Components, Redux, <Pink>Node.js</Pink>, Express, <Pink>Mongo DB</Pink>,
        RESTful API:s, <Pink>mob- and pair-programming</Pink>, Github.
        </Paragraph>
      </TechDiv>
    </TechContainer>
  )
}