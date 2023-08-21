import styled from 'styled-components';

export const LandingSectionContainer = styled.section`
    display: flex;
    width: 100%;
    height: 990px;
    top: 0;

    @media (max-width: 320px) {
        height: 1110px;
    }

    @media (min-width: 668px) and (max-width: 1023px) {
        height: 80vh;
    }

    @media (min-width: 1024px) and (max-width: 1279px) {
        height: 900px;
    }

    @media (min-width: 1280px) {
        height: 100vh;
    }
`

// export const TechContainer = styled.section`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     background-color: #ffd2c2;
//     padding-top: 300px;
//     padding-bottom: 300px;
// `

export const ProjectContainer = styled.section`
    display: flex;
    flex-direction: column;
    padding-top: 100px;
    align-items: center;
`

export const SkillsContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
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
    gap: 40px;
    padding-top: 70px;
    height: 70vh;
`