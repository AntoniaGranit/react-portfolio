import styled from 'styled-components';
import ColoredBlob from '../Assets/colored-blob2.jpg'

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 92%;
    height: 100vh;

    @media (min-width: 668px) and (max-width: 1023px) {
        width: 100%; 
    }

    @media (min-width: 1024px) {
        width: 50%;
    }
`

export const RightImage = styled.div`
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    left: 50%;
    background-image: url(${ColoredBlob});
    background-size: cover;

    @media (min-width: 668px) and (max-width: 1023px) {
        display: none; 
    }

    @media (min-width: 1024px) {
        display: flex;
    }
`

export const AntoniaInfo = styled.div`
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
        width: 85%;
        margin: auto;
        margin-top: 15%;
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

export const SocialMediaIcons = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 180px;
    margin-top: 40px;

i {
    transition: transform 0.2s ease-in-out;
    color: #030324;
}

i:hover {
    transform: scale(1.5);
}

i:visited {
    color: black;
}

@media (min-width: 1024px) {
    margin-top: 0px;
    }
`