import styled from 'styled-components'

export const LeftContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 92%;
	height: 100vh;
	z-index: 1;

	@media (min-width: 668px) and (max-width: 1023px) {
		width: 100%;
	}

	@media (min-width: 1024px) {
		width: 100%;
	}
`

export const NavContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 90%;
	margin: auto;
	margin-top: 7%;
	margin-left: 7%;

	@media (min-width: 668px) and (max-width: 1023px) {
		margin: auto;
		margin-top: 10%;
	}

	@media (min-width: 1024px) {
		width: 50%;
		margin: auto;
		margin-top: 10%;
	}
`

export const AntoniaHeader = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding-bottom: 20px;

	@media (min-width: 1024px) {
		flex-direction: row;
	}
`

export const AntoniaTitleText = styled.div`
	display: flex;
	flex-direction: column;

	@media (min-width: 1024px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
`

export const AntoniaHeaderInfo = styled.div`
	display: flex;
	padding-bottom: 40px;

	@media (min-width: 1024px) {
		padding-bottom: 40px;
	}
`

export const LinksContainer = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	width: 260px;
	margin-top: 40px;

	@media (min-width: 1024px) {
		margin-top: 0px;
	}
`
