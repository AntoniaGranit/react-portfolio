import styled from 'styled-components';

/* TITLES */
export const AntoniaGranit = styled.h3`
    font-family: Moglan;
    font-size: 10vw;
    color: #030324;

    @media (min-width: 1024px) {
        font-size: 7vw;
    }
`

export const BlackTitle = styled.h2`
    font-family: SatoshiBlack;
    font-size: 1.6em;
    color: #030324;
`

export const FrontEndDev = styled.h2`
    font-family: "Outfit";
    font-size: 1.7em;
    color: #030324;
`

export const MediumBlackTitle = styled.h3`
    font-family: SatoshiBlack;
    font-size: 1.4em;
    color: #030324;
`

export const BigTitle = styled.h1`
    font-family: Moglan;
    font-style: normal;
    font-size: 3.4em;
    line-height: 65px;
    color: #030324;

    @media (min-width: 668px) and (max-width: 1023px) {
        font-size: 4.7em;
        line-height: 130px;
    }

    @media (min-width: 1024px) {
        font-size: 8vw;
        line-height: 130px;
    }
`

export const LCTitle = styled.h1`
    font-family: Moglan;
    font-style: normal;
    font-size: 10vw;
    line-height: 65px;
    color: #030324;

    @media (max-width: 380px) {
        font-size: 2.5em;
    }

    @media (min-width: 668px) and (max-width: 1023px) {
        font-size: 10vw;
        line-height: 130px;
    }

    @media (min-width: 1024px) {
        font-size: 8vw;
        line-height: 130px;
    }
`

/* BODY TEXT */
export const Paragraph = styled.p`
    font-family: "Outfit";
    font-style: normal;
    color: #030324;
    font-size: 1.2em;
    line-height: 30px;
    text-align: justify;
`

/* MENU LINKS */
export const MenuLink = styled.p`
    font-family: "Outfit";
    color: #030324;
    font-size: 1.1em;
    display: flex;
    padding: 7px;
    cursor: pointer;
    transition: 0.35s ease-in-out;

    &:hover {
        transform: translateX(0.3em);
    }
`

export const MenuIcon = styled.p`
    display: flex;
    padding-right: 7px;
`

/* LINKS AND HIGHLIGHTED TEXT */

export const Pink = styled.mark`
    background-color: #f85543;
    color: white;
`

export const SkillsPink = styled.mark`
    background-color: #030324;
    color: white;
    font-family: Moglan;
    border-radius: 25px;
    font-size: 1.5em;
    padding: 10px 15px;
    display: flex;
    justify-content: center;
    margin-bottom: 15px;

    @media (min-width: 1024px) {
    width: 150px;
    }
`