import React from 'react';
import { LandingSection } from './Sections/LandingSection';
import { TechSection } from './Sections/TechSection';
import { ProjectsSection } from './Sections/ProjectsSection';
import { SkillSection } from './Sections/SkillSection';
import { ContactSection } from './Sections/ContactSection';

export const App = () => {
  return (
    <div>
      <LandingSection />
      <TechSection />
      <ProjectsSection />
      <SkillSection />
      <ContactSection />
    </div>
  )
}
