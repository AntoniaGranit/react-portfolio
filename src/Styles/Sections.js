import styled from 'styled-components';

export const LandingSectionContainer = styled.section`
    display: flex;
    width: 100%;
    height: 900px;
    top: 0;

    @media (max-width: 375px) {
        height: 1000px;
    }

    @media (min-width: 668px) and (max-width: 1023px) {
        height: 800px;
    }

    @media (min-width: 1024px) and (max-width: 1279px) {
        height: 750px;
    }

    @media (min-width: 1280px) {
        height: 100vh;
    }
`

export const ProjectContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
`

export const SkillsContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 150px;
    height: fit-content;
`

export const ContactContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    gap: 40px;
    height: 70vh;
`