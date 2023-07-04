import styled from 'styled-components';

export const LandingSectionContainer = styled.section`
    display: flex;
    width: 100%;
    height: 990px;
    background-color: rgb(255, 246, 240);
    top: 0;

    @media (max-width: 320px) {
        height: 1110px;
    }

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
    padding-top: 300px;
    padding-bottom: 300px;
`

export const ProjectContainer = styled.section`
    display: flex;
    flex-direction: column;
    padding-top: 100px;
    align-items: center;
    background-color: rgb(255, 251, 247);
`

export const SkillsContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffe0e5;
    padding-top: 100px;
    padding-bottom: 120px;
    height: fit-content;


    @media (min-width: 1024px) {
        padding-top: 50px;
        padding-bottom: 150px;
    }
`

export const ContactContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    width: 80%;
    gap: 20px;
    padding-top: 100px;
    height: 90vh;
    background-color: rgb(255, 251, 247);

    @media (min-width: 668px) and (max-width: 1023px) {
    }

    @media (min-width: 1024px) {
    }
`