import styled from 'styled-components';

export const ProjectList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 150px;
    width: 80%;
    padding-bottom: 0px;
    gap: 30px;

    @media (min-width: 1024px) {
        width: 820px;
        padding-left: 100px;
        align-items: self-start;
    }
`

export const ProjectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    gap: 20px;
    width: 360px;
    margin-top: 80px;

    @media (max-width: 320px) {
        width: 305px;
    }

    @media (min-width: 668px) and (max-width: 1023px) {
        width: 80%;
    }

    @media (min-width: 1024px) {
        flex-direction: row;
        width: 90%;
    }
`

export const ProjectInformation = styled.div`
    padding-top: 5px;
    display: flex;
    flex-direction: column;
`

export const ProjectTitle = styled.div`
    margin-bottom: 7px;
`

export const ProjectScreenshot = styled.img`
    width: 190px;
    height: 230px;
    display: flex;
    align-self: center;

    @media (min-width: 1024px) {
        width: 190px;
        align-self: start;
    }
`
export const CodeLanguageContainer = styled.div`
display: flex;
flex-direction: row;
gap: 5px;
margin-top: 25px;
margin-bottom: 40px;
`

export const ProjectButtons = styled.div`
    display: flex;
    width: fit-content;
    gap: 15px;
    margin-top: -10px;
    margin-left: -8px;
`
