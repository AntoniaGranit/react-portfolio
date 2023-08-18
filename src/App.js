import React from 'react';
import { LandingSection } from './Sections/LandingSection';
import { ProjectsSection } from './Sections/ProjectsSection';
import { SkillSection } from './Sections/SkillSection';
import { ContactSection } from './Sections/ContactSection';
import MenuComponent from './Components/Menu';

export const App = () => {
  return (
    <div>
      <MenuComponent />
      <LandingSection />
      <SkillSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}
