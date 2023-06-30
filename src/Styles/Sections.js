import styled from 'styled-components';

export const LandingSectionContainer = styled.section`
    display: flex;
    width: 100%;
    height: 950px;
    background-color: rgb(255, 246, 240);
    top: 0;

    @media (min-width: 668px) and (max-width: 1023px) {
        height: 100vh;
    }

    @media (min-width: 1024px) {
        height: 100vh;
    }
`

export const TechContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffd2c2;
    padding-top: 350px;
    padding-bottom: 350px;
`

export const ProjectContainer = styled.section`
    display: flex;
    flex-direction: column;
    padding-top: 100px;
    align-items: center;
    background-color: rgb(255, 251, 247);

    @media (min-width: 668px) and (max-width: 1023px) {

    }

    @media (min-width: 1024px) {

    }
`

export const SkillsContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffe0e5;
    padding-top: 150px;
    padding-bottom: 150px;

    @media (min-width: 668px) and (max-width: 1023px) {

    }

    @media (min-width: 1024px) {

    }
`

export const ContactContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding-top: 100px;
    height: 90vh;
    background-color: rgb(255, 251, 247);

    @media (min-width: 668px) and (max-width: 1023px) {

    }

    @media (min-width: 1024px) {

    }
`