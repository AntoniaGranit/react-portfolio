import React from 'react'
import { Slide } from 'react-awesome-reveal'
import data from '../Components/projects.json'
import HomeLink from '../Components/HomeLink'
import { ProjectList } from '../Styles/ProjectSection'
import SingleProject from '../Components/SingleProject'
import { ProjectContainer } from '../Styles/Sections'
import { BigTitle } from '../Styles/Fonts'

const ProjectsSection = () => {
	return (
		<Slide triggerOnce direction="right" duration={1000}>
			<ProjectContainer id="projects">
				<HomeLink />
				<BigTitle>Projects</BigTitle>
				<ProjectList>
					{data.reverse().map((project) => (
						<SingleProject key={project.id} project={project} />
					))}
				</ProjectList>
			</ProjectContainer>
		</Slide>
	)
}

export default ProjectsSection
