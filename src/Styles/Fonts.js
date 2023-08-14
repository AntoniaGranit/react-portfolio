import styled from 'styled-components';

/* TITLES */
export const AntoniaGranit = styled.h3`
    font-family: Moglan;
    font-size: 2.8em;
    color: #030324;

    @media (min-width: 1024px) {
        font-size: 3.6em;
    }
`

export const BlackTitle = styled.h2`
    font-family: SatoshiBlack;
    font-size: 1.6em;
    color: #030324;
`

export const FrontEndDev = styled.h2`
    font-family: "Outfit";
    font-size: 1.4em;
    color: #030324;
`

export const MediumBlackTitle = styled.h3`
    font-family: SatoshiBlack;
    font-size: 1.4em;
    color: #030324;
`

export const BigTitle = styled.h1`
    font-family: SatoshiBlack;
    font-style: normal;
    font-weight: 700;
    font-size: 3.4em;
    line-height: 65px;
    color: #050d50;

    @media (min-width: 668px) and (max-width: 1023px) {
        font-size: 4.7em;
        line-height: 130px;
    }

    @media (min-width: 1024px) {
        font-size: 4.7em;
        line-height: 130px;
    }
`

export const LCTitle = styled.h1`
    font-family: SatoshiBlack;
    font-style: normal;
    font-weight: 700;
    font-size: 3.4em;
    line-height: 65px;
    color: #050d50;

    @media (max-width: 380px) {
        font-size: 2.5em;
    }

    @media (min-width: 668px) and (max-width: 1023px) {
        font-size: 4.7em;
        line-height: 130px;
    }

    @media (min-width: 1024px) {
        font-size: 4.7em;
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
    background-color: #ff5454;
    color: white;
    font-family: SatoshiMedium;
    font-size: 1.3em;
    padding: 7px;
    display: flex;

    @media (min-width: 1024px) {
    width: 150px;
    }
`