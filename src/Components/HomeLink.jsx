import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'react-bootstrap-icons'
import { HomeLinkContainer } from '../Styles/Sections'

const HomeLink = () => {
	return (
		<HomeLinkContainer>
			<Fade triggerOnce delay={1000} duration={1000}>
				<Link to="/">
					<ArrowLeft size={30} />
				</Link>
			</Fade>
		</HomeLinkContainer>
	)
}

export default HomeLink
