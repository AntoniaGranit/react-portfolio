import React from 'react';
import { NavBar } from './Components/NavBar';
import { LandingSection } from './Sections/LandingSection';
import { TechSection } from './Sections/TechSection';
import { ProjectsSection } from './Sections/ProjectsSection';
import { SkillSection } from './Sections/SkillSection';
import { ContactSection } from './Sections/ContactSection';

export const App = () => {
  return (
    <div>
      <NavBar />
      <LandingSection />
      <TechSection />
      <ProjectsSection />
      <SkillSection />
      <ContactSection />
    </div>
  )
}
