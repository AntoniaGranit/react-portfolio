import React from 'react';
import styled from 'styled-components';
import { LandingSection } from './Sections/LandingSection';
import { ProjectsSection } from './Sections/ProjectsSection';
import { SkillSection } from './Sections/SkillSection';
import { ContactSection } from './Sections/ContactSection';
import MenuComponent from './Components/Menu';

const Blob = styled.div`
background-color: #E1FF74;
box-shadow:
    0px 0px 60px 50px #E1FF74; /* outer cyan */
border-radius: 50%;
opacity: 90%;
width: 210px;
height: 210px;
position: absolute;
left: 65%;
top: 26%;
z-index: -10;
`

export const App = () => {
  return (
    <div>
      <MenuComponent />
      <Blob />
      <LandingSection />
      <SkillSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}
