import React from 'react'
import { SkillsContainer } from '../Styles/Sections'
import { SkillsLists, SkillsUl, SkillsLi } from '../Styles/SkillSection'
import { BigTitle, SkillsTitle } from '../Styles/Fonts'

const SkillSection = () => {
	return (
		<SkillsContainer id="skills">
			<BigTitle>Skills</BigTitle>
			<SkillsLists>
				<SkillsUl>
					<SkillsTitle>Frontend</SkillsTitle>
					<SkillsLi>TypeScript</SkillsLi>
					<SkillsLi>Next.js</SkillsLi>
					<SkillsLi>React</SkillsLi>
					<SkillsLi>Tailwind CSS</SkillsLi>
					<SkillsLi>React Native</SkillsLi>
					<SkillsLi>Styled Components</SkillsLi>
					<SkillsLi>Redux</SkillsLi>
					<SkillsLi>Javascript ES6</SkillsLi>
					<SkillsLi>CSS3</SkillsLi>
					<SkillsLi>HTML5</SkillsLi>
				</SkillsUl>
				<SkillsUl>
					<SkillsTitle>Backend</SkillsTitle>
					<SkillsLi>PostgreSQL</SkillsLi>
					<SkillsLi>Drizzle ORM</SkillsLi>
					<SkillsLi>Node.js</SkillsLi>
					<SkillsLi>MongoDB</SkillsLi>
					<SkillsLi>Express</SkillsLi>
					<SkillsLi>RESTful APIs</SkillsLi>
				</SkillsUl>
				<SkillsUl>
					<SkillsTitle>Toolbox</SkillsTitle>
					<SkillsLi>Visual Studio Code</SkillsLi>
					<SkillsLi>Git</SkillsLi>
					<SkillsLi>GitHub</SkillsLi>
					<SkillsLi>GitLab</SkillsLi>
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
			</SkillsLists>
		</SkillsContainer>
	)
}

export default SkillSection
